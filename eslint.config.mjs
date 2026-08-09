import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'content/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      // Pages here are multi-megabyte markdown dumps; `<Link>` would prefetch
      // them on hover. Cross-page navigation is deliberately a full page load.
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    // The generators walk untyped OpenAPI/Intercom payloads.
    files: ['scripts/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

export default config;
