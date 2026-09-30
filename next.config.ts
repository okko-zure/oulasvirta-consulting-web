import type { NextConfig } from 'next';

/**
 * Permanent redirects from the addresses of the previous WordPress site
 * (https://oulasvirtaconsulting.com) to the closest place on this site.
 * Without them every old, already indexed address would become a 404 when the
 * domain moves here. See docs/MIGRATION_REPORT.md, section "WordPress site".
 */
const legacyWordPressRedirects = [
  { source: '/palvelut', destination: '/#palvelut' },
  { source: '/palvelut/rahanpesun-ja-terrorismin-rahoituksen-estaminen', destination: '/#palvelut' },
  { source: '/palvelut/pakotteiden-noudattaminen', destination: '/#palvelut' },
  { source: '/palvelut/compliance-ja-riskienhallinta', destination: '/#palvelut' },
  { source: '/palvelut/koulutuspalvelut', destination: '/#koulutukset' },
  { source: '/meista', destination: '/#katja' },
  { source: '/yhteystiedot', destination: '/#yhteys' },
  { source: '/referenssit', destination: '/#referenssit' },
  { source: '/blogit', destination: '/#kirjoituksia' },
  { source: '/2024/08/14/rahanpesun-estaminen', destination: '/kirjoituksia/rahanpesun-estaminen/' },
  {
    source: '/2024/09/11/tiedatko-kuka-yritykseesi-investoi',
    destination: '/kirjoituksia/tiedatko-kuka-yritykseesi-investoi/',
  },
];

/**
 * The site is statically generated. Next.js needs inline scripts for its own
 * bootstrap and inline style attributes for next/image, so 'unsafe-inline' is
 * required for scripts and styles; a nonce-based policy would force dynamic
 * rendering of every page. Everything else is locked down. The contact form is
 * the only cross-origin request (a native form POST to FormSubmit).
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self' https://formsubmit.co",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The prototype's public URLs end with a slash (/en/, /kirjoituksia/slug/).
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return legacyWordPressRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
