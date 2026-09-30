#!/usr/bin/env node
// Checks the CSS Modules of the site:
//   - every `styles.something` used in a component must exist in the CSS Module it imports
//     (TypeScript cannot check this: a typo would silently remove a style);
//   - CSS classes that no component uses are listed as a notice.
// Runs as part of `npm run lint`.
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const srcDir = join(root, 'src');

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

function classesDefinedIn(cssPath) {
  const css = readFileSync(cssPath, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Classes wrapped in :global(...) belong to the global stylesheet, not to this module.
    .replace(/:global\([^)]*\)/g, '');
  return new Set([...css.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((match) => match[1]));
}

const files = [...walk(srcDir)];
const cssModules = new Map(files.filter((f) => f.endsWith('.module.css')).map((f) => [f, classesDefinedIn(f)]));
const used = new Map([...cssModules.keys()].map((f) => [f, new Set()]));
const problems = [];

for (const file of files.filter((f) => /\.(tsx?|jsx?)$/.test(f))) {
  const source = readFileSync(file, 'utf8');
  for (const [, identifier, specifier] of source.matchAll(/import\s+(\w+)\s+from\s+'([^']+\.module\.css)'/g)) {
    const cssPath = resolve(dirname(file), specifier);
    const defined = cssModules.get(cssPath);
    if (!defined) {
      problems.push(`${relative(root, file)}: imports ${specifier}, which does not exist`);
      continue;
    }
    const references = [
      ...source.matchAll(new RegExp(`\\b${identifier}\\.([A-Za-z_]\\w*)`, 'g')),
      ...source.matchAll(new RegExp(`\\b${identifier}\\[['"]([^'"]+)['"]\\]`, 'g')),
    ];
    for (const [, name] of references) {
      used.get(cssPath).add(name);
      if (!defined.has(name)) {
        problems.push(`${relative(root, file)}: styles.${name} is not defined in ${relative(root, cssPath)}`);
      }
    }
  }
}

const unused = [];
for (const [cssPath, defined] of cssModules) {
  for (const name of defined) {
    if (!used.get(cssPath).has(name)) unused.push(`${relative(root, cssPath)}: .${name}`);
  }
}

if (unused.length > 0) {
  console.log(`Notice: ${unused.length} CSS class(es) are never referenced by a component (they may be helpers used only in selectors):`);
  for (const line of unused) console.log(`  ${line}`);
}

if (problems.length > 0) {
  console.error('\nCSS Module errors:');
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`CSS Modules OK (${cssModules.size} modules).`);
