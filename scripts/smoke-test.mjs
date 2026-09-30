#!/usr/bin/env node
// Smoke test of the production build.
//
// Starts `next start` (run `npm run build` first), requests every page and checks the
// things that must never silently break: language, SEO tags, redirects from the old
// WordPress site, 404 behaviour, the contact form, internal links and security headers.
// It needs no browser and no extra dependencies. Run it with `npm run smoke` (part of `npm run check`).
//
// Environment: SMOKE_PORT (default 4173), SMOKE_BASE_URL (test an already running server instead of starting one).
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { gzipSync } from 'node:zlib';

const PORT = Number(process.env.SMOKE_PORT ?? 4173);
const BASE_URL = process.env.SMOKE_BASE_URL ?? `http://127.0.0.1:${PORT}`;
const PRODUCTION_ORIGIN = 'https://oulasvirtaconsulting.com';
/**
 * Upper limit for the JavaScript that modern browsers download for the home page (gzip).
 * About 125 KB of it is the Next.js and React runtime that every App Router page ships;
 * the site's own code (mobile menu, contact form) is about 15 KB. The limit exists to catch a
 * heavy dependency being added by accident, not to squeeze the framework.
 */
const JS_BUDGET_GZIP_KB = 160;

const LANGUAGES = ['fi', 'en', 'es'];
const HOME_ANCHORS = ['alku', 'toimialat', 'eu-aml', 'mlro', 'palvelut', 'koulutukset', 'katja', 'referenssit', 'kirjoituksia', 'yhteys', 'yhteydenottolomake', 'sisalto'];
const HOME_TEXT = { fi: 'Vaativa sääntely', en: 'Complex rules', es: 'Normativa compleja' };

// Old WordPress addresses that must keep working (permanent redirects).
const WORDPRESS_REDIRECTS = {
  '/palvelut/': '/#palvelut',
  '/palvelut/rahanpesun-ja-terrorismin-rahoituksen-estaminen/': '/#palvelut',
  '/palvelut/pakotteiden-noudattaminen/': '/#palvelut',
  '/palvelut/compliance-ja-riskienhallinta/': '/#palvelut',
  '/palvelut/koulutuspalvelut/': '/#koulutukset',
  '/meista/': '/#katja',
  '/yhteystiedot/': '/#yhteys',
  '/referenssit/': '/#referenssit',
  '/blogit/': '/#kirjoituksia',
  '/2024/08/14/rahanpesun-estaminen/': '/kirjoituksia/rahanpesun-estaminen/',
  '/2024/09/11/tiedatko-kuka-yritykseesi-investoi/': '/kirjoituksia/tiedatko-kuka-yritykseesi-investoi/',
};
const NOT_FOUND_PATHS = ['/does-not-exist/', '/en/does-not-exist/', '/es/does-not-exist/', '/kirjoituksia/does-not-exist/', '/en/kirjoituksia/does-not-exist/', '/api/contact/'];

const failures = [];
let checks = 0;
function check(condition, message) {
  checks += 1;
  if (!condition) failures.push(message);
}

// ---------------------------------------------------------------- small HTML helpers (the markup is our own)
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

function parseTags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b([^>]*)>`, 'gi'))].map((match) => {
    const attributes = {};
    for (const [, key, quoted, bare] of match[1].matchAll(/([\w:.-]+)(?:=(?:"([^"]*)"|([^\s"'>]+)))?/g)) {
      attributes[key.toLowerCase()] = decode(quoted ?? bare ?? '');
    }
    return attributes;
  });
}
const metaContent = (html, key) => parseTags(html, 'meta').find((tag) => tag.name === key || tag.property === key)?.content;
const count = (html, pattern) => (html.match(pattern) ?? []).length;

async function get(path, options = {}) {
  const response = await fetch(new URL(path, BASE_URL), { redirect: 'manual', ...options });
  return { status: response.status, headers: response.headers, body: await response.text() };
}

// ---------------------------------------------------------------- server
let server;
async function startServer() {
  if (process.env.SMOKE_BASE_URL) return;
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(PORT)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  server.stdout.on('data', (chunk) => (output += chunk));
  server.stderr.on('data', (chunk) => (output += chunk));
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`next start exited early:\n${output}`);
    try {
      const response = await fetch(new URL('/', BASE_URL));
      if (response.ok) return;
    } catch {
      // not listening yet
    }
    await sleep(500);
  }
  throw new Error(`Server did not start within 60 seconds:\n${output}`);
}

// ---------------------------------------------------------------- checks
function checkPage(path, page) {
  const at = (message) => `${path}: ${message}`;
  const { body, headers } = page;
  const language = path.startsWith('/en/') ? 'en' : path.startsWith('/es/') ? 'es' : 'fi';

  check(page.status === 200, at(`status ${page.status}, expected 200`));
  check((headers.get('content-type') ?? '').startsWith('text/html'), at('content type is not HTML'));
  check(new RegExp(`<html[^>]*\\slang="${language}"`).test(body), at(`<html lang="${language}"> missing`));
  check(count(body, /<h1[\s>]/g) === 1, at(`expected exactly one <h1>, found ${count(body, /<h1[\s>]/g)}`));
  check(/<title>[^<]+<\/title>/.test(body), at('empty or missing <title>'));
  const description = metaContent(body, 'description');
  check(Boolean(description) && description.length >= 50 && description.length <= 320, at('meta description missing or of odd length'));

  // Indexing: nothing may block search engines.
  const robots = metaContent(body, 'robots') ?? '';
  check(!/noindex|nofollow/i.test(robots), at(`robots meta blocks indexing: "${robots}"`));
  check(!/noindex/i.test(headers.get('x-robots-tag') ?? ''), at('X-Robots-Tag blocks indexing'));

  // Canonical URL and hreflang.
  const links = parseTags(body, 'link');
  const canonical = links.find((tag) => tag.rel === 'canonical')?.href;
  check(canonical === `${PRODUCTION_ORIGIN}${path}`, at(`canonical is "${canonical}", expected "${PRODUCTION_ORIGIN}${path}"`));
  const alternates = Object.fromEntries(links.filter((tag) => tag.rel === 'alternate' && tag.hreflang).map((tag) => [tag.hreflang, tag.href]));
  for (const key of [...LANGUAGES, 'x-default']) {
    check(alternates[key]?.startsWith(`${PRODUCTION_ORIGIN}/`), at(`hreflang "${key}" missing or not absolute`));
  }
  check(alternates[language] === canonical, at('hreflang of the page language differs from the canonical URL'));

  // Social sharing.
  for (const key of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale', 'og:site_name', 'twitter:card', 'twitter:image']) {
    check(Boolean(metaContent(body, key)), at(`${key} missing`));
  }

  // Structure and accessibility.
  check(/<a[^>]*href="#sisalto"/.test(body), at('skip link to #sisalto missing'));
  // Articles have their own <header> inside <article>; that is not the page banner, so only require
  // that the page header comes before <main> and that <main> and <footer> exist exactly once.
  const mainAt = body.search(/<main[\s>]/);
  check(count(body, /<main[\s>]/g) === 1 && count(body, /<footer[\s>]/g) === 1, at('there must be exactly one <main> and one <footer>'));
  check(mainAt > 0 && /<header[\s>]/.test(body.slice(0, mainAt)), at('page header missing before <main>'));
  check(/<nav[^>]*aria-label="[^"]+"/.test(body), at('main navigation has no accessible name'));
  const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  check(duplicates.length === 0, at(`duplicate ids: ${[...new Set(duplicates)].join(', ')}`));
  const anchors = [...body.matchAll(/\shref="#([^"]+)"/g)].map((match) => match[1]);
  for (const anchor of new Set(anchors)) check(ids.includes(anchor), at(`anchor #${anchor} has no target`));
  for (const image of parseTags(body, 'img')) check(image.alt !== undefined, at(`<img src="${image.src}"> has no alt attribute`));
  for (const link of parseTags(body, 'a').filter((tag) => tag.target === '_blank')) {
    check(/noopener/.test(link.rel ?? ''), at(`external link ${link.href} lacks rel="noopener"`));
  }
  const switcher = parseTags(body, 'a').filter((tag) => tag.hreflang && LANGUAGES.includes(tag.hreflang) && tag.lang);
  check(switcher.length === 3, at('language switch does not have three links'));
  check(switcher.filter((tag) => tag['aria-current'] === 'page').map((tag) => tag.hreflang).join() === language, at('language switch marks the wrong current language'));
  for (const [, json] of body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch {
      failures.push(at('JSON-LD is not valid JSON'));
    }
  }
  // The privacy notice needs no structured data; the home page and the articles do.
  const isPrivacy = ['/tietosuoja/', '/en/privacy/', '/es/privacidad/'].includes(path);
  check(isPrivacy || /<script type="application\/ld\+json">/.test(body), at('no structured data'));

  // Headers.
  const csp = headers.get('content-security-policy') ?? '';
  check(csp.includes("default-src 'self'") && !csp.includes('unsafe-eval'), at('Content-Security-Policy missing or too loose'));
  check(headers.get('x-content-type-options') === 'nosniff', at('X-Content-Type-Options missing'));
  check(!headers.has('x-powered-by'), at('X-Powered-By is exposed'));
  return { language, ids };
}

function checkHome(path, language, page) {
  const at = (message) => `${path}: ${message}`;
  const { body } = page;
  check(body.includes(HOME_TEXT[language]), at(`expected text "${HOME_TEXT[language]}" not found`));
  const { ids } = { ids: [...body.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]) };
  for (const anchor of HOME_ANCHORS) check(ids.includes(anchor), at(`section id "${anchor}" missing`));

  // The testimonials are verbatim quotes only on the Finnish page, summaries elsewhere.
  check(language === 'fi' ? /<blockquote/.test(body) : !/<blockquote/.test(body), at('quotation/summary rule for testimonials broken'));

  // The hero image is preloaded, everything else lazy.
  check(/<link[^>]*rel="preload"[^>]*as="image"/.test(body), at('hero image is not preloaded'));

  // Contact form: the working behaviour of the prototype must be preserved.
  const form = parseTags(body, 'form').find((tag) => tag.id === 'yhteydenottolomake');
  check(form?.action === 'https://formsubmit.co/katja@oulasvirta.com' && form?.method === 'post', at('contact form does not post to FormSubmit'));
  const inputs = parseTags(body, 'input');
  for (const name of ['_subject', '_template', '_url', '_next', 'language', '_honey', 'name', 'company', 'email']) {
    check(inputs.some((input) => input.name === name), at(`form field "${name}" missing`));
  }
  check(!inputs.some((input) => input.name === '_captcha'), at('form must not disable reCAPTCHA (_captcha)'));
  check(inputs.find((input) => input.name === 'language')?.value === language.toUpperCase(), at('language field has the wrong value'));
  const next = inputs.find((input) => input.name === '_next')?.value ?? '';
  check(next.startsWith(`${PRODUCTION_ORIGIN}${language === 'fi' ? '' : `/${language}`}/?contact=sent`), at(`_next returns to the wrong page: ${next}`));
  for (const input of inputs.filter((tag) => tag.type !== 'hidden')) {
    check(new RegExp(`<label[^>]*for="${input.id}"`).test(body), at(`input #${input.id} has no label`));
  }
  check(/<textarea[^>]*name="message"[^>]*required/.test(body), at('message field is not required'));
  check(/<select[^>]*name="topic"/.test(body), at('topic select missing'));
  check(parseTags(body, 'p').some((tag) => tag.role === 'status'), at('form status live region missing'));
}

async function main() {
  await startServer();

  // Every page in the sitemap.
  const sitemap = await get('/sitemap.xml');
  check(sitemap.status === 200, `/sitemap.xml: status ${sitemap.status}`);
  const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  check(urls.length >= 12, `sitemap has ${urls.length} URLs, expected at least 12`);
  check(count(sitemap.body, /hreflang="x-default"/g) === urls.length, 'every sitemap entry needs an x-default alternate');
  for (const home of ['/', '/en/', '/es/']) check(urls.includes(`${PRODUCTION_ORIGIN}${home}`), `sitemap lacks ${home}`);
  check(urls.every((url) => url.startsWith(`${PRODUCTION_ORIGIN}/`) && url.endsWith('/')), 'sitemap URLs must be absolute production URLs with a trailing slash');

  const pages = new Map();
  for (const url of urls) {
    const path = url.slice(PRODUCTION_ORIGIN.length);
    const page = await get(path);
    pages.set(path, page);
    const { language } = checkPage(path, page);
    if (path === '/' || path === '/en/' || path === '/es/') checkHome(path, language, page);
  }

  // Internal links must not lead to errors.
  const internal = new Set();
  for (const [path, page] of pages) {
    for (const link of parseTags(page.body, 'a')) {
      const href = link.href ?? '';
      if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_next/')) continue;
      internal.add(href.split('#')[0] || path);
    }
  }
  for (const href of internal) {
    const target = pages.get(href) ?? (await get(href));
    check(target.status === 200, `internal link ${href} returns ${target.status}`);
  }

  // Redirects from the old WordPress site.
  for (const [from, to] of Object.entries(WORDPRESS_REDIRECTS)) {
    const response = await get(from);
    const location = response.headers.get('location') ?? '';
    check(response.status === 308 && location.replace(BASE_URL, '') === to, `${from} should redirect (308) to ${to}, got ${response.status} ${location}`);
  }
  for (const path of ['/en', '/es', '/tietosuoja']) {
    const response = await get(path);
    check(response.status === 308 && response.headers.get('location') === `${path}/`, `${path} should redirect to ${path}/`);
  }

  // 404s: a real 404 status, never indexed.
  for (const path of NOT_FOUND_PATHS) {
    const response = await get(path);
    check(response.status === 404, `${path} returns ${response.status}, expected 404`);
    check(/<meta name="robots" content="[^"]*noindex/.test(response.body), `${path}: 404 page is missing noindex`);
    check(/<html[^>]*\slang="/.test(response.body), `${path}: 404 page has no lang attribute`);
  }

  // robots.txt, icons and the social image.
  const robots = await get('/robots.txt');
  check(robots.status === 200 && robots.body.includes(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`), '/robots.txt missing or without sitemap');
  check(!/^Disallow:\s*\/\s*$/im.test(robots.body), '/robots.txt blocks the whole site');
  const home = pages.get('/');
  const iconHref = parseTags(home.body, 'link').find((tag) => tag.rel === 'icon')?.href;
  const ogImage = metaContent(home.body, 'og:image');
  for (const resource of ['/favicon.ico', iconHref, ogImage?.replace(PRODUCTION_ORIGIN, '')]) {
    const asset = resource ? await fetch(new URL(resource, BASE_URL)) : undefined;
    check(asset?.status === 200, `asset ${resource} is not served`);
  }

  // JavaScript weight of the home page. Scripts marked `nomodule` are polyfills for old browsers
  // that modern browsers never download, so they are not counted.
  const scripts = [
    ...new Set(
      parseTags(home.body, 'script')
        .filter((tag) => tag.src?.includes('.js') && !('nomodule' in tag))
        .map((tag) => tag.src),
    ),
  ];
  let gzipBytes = 0;
  for (const src of scripts) {
    const response = await fetch(new URL(src, BASE_URL));
    gzipBytes += gzipSync(Buffer.from(await response.arrayBuffer())).length;
  }
  const gzipKb = Math.round(gzipBytes / 1024);
  check(gzipKb <= JS_BUDGET_GZIP_KB, `home page JavaScript is ${gzipKb} KB gzip, budget is ${JS_BUDGET_GZIP_KB} KB`);

  console.log(`Smoke test: ${pages.size} pages, ${internal.size} internal links, ${Object.keys(WORDPRESS_REDIRECTS).length} redirects, ${NOT_FOUND_PATHS.length} not-found paths, home page JS ${gzipKb} KB gzip.`);
}

try {
  await main();
} catch (error) {
  failures.push(`Smoke test could not run: ${error instanceof Error ? error.message : String(error)}`);
} finally {
  server?.kill();
}

if (failures.length > 0) {
  console.error(`\n${failures.length} of ${checks} checks FAILED:`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log(`All ${checks} checks passed.`);
