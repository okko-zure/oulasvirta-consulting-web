// ESLint 10 flat configuration.
//
// Why not `eslint-config-next`? Its bundled `eslint-plugin-react` crashes on
// ESLint 10 ("contextOrFilename.getFilename is not a function", verified on
// 30 Sep 2026 with eslint-config-next 16.3.7), and ESLint 9 reached end of life
// on 6 Aug 2026. This file therefore composes the same building blocks that
// eslint-config-next uses, minus the two plugins that do not support ESLint 10
// yet (eslint-plugin-react, eslint-plugin-import). Revisit when eslint-config-next
// supports ESLint 10 (see docs/MIGRATION_REPORT.md).
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { '@next/next': nextPlugin, 'react-hooks': reactHooks },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      // Only relevant to the Pages Router; this project uses the App Router.
      '@next/next/no-html-link-for-pages': 'off',
      // Content must never be injected as raw HTML. The single legitimate use
      // (JSON-LD structured data) carries an explicit, documented exception.
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']",
          message: 'Do not inject raw HTML. Render content as React elements instead.',
        },
      ],
    },
  },
  {
    files: ['scripts/**/*.mjs', '*.mjs'],
    languageOptions: { globals: globals.node },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'legacy/**']),
]);
