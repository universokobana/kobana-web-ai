# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Instructions

After editing a file run `npx prettier --write` over the file.

## Commands

### Development

- **Run development server**: `npm run dev`
- **Install dependencies**: `npm install`
- **Update API documentation**: `npm run update-api-reference && npm run update-api-docs`
- **Update knowledge base articles**: `npm run update-articles`

### Testing

- **Run all tests**: `npm test`
- **Run specific test**: `npx vitest run test/pages.test.tsx`
- **Run tests matching pattern**: `npx vitest run -t "pattern"`

### Code Quality

- **Lint**: `npm run lint`
- **Auto-fix linting issues**: `npm run lint:fix`
- **Typecheck**: `npm run typecheck`
- **Format**: `npm run format`

## Architecture Overview

This is a Next.js (App Router) + TypeScript application that serves Kobana's
documentation optimized for LLMs. The key architectural decisions:

### Content Negotiation

The application intelligently serves different formats based on the client:

- **Browsers** (detected via User-Agent): Receive HTML with full styling
- **Bots/LLMs/CLI tools**: Receive clean Markdown for optimal parsing

`middleware.ts` makes that decision. Markdown requests are rewritten to an
internal `/raw/...` route handler, which is the only place that can set
`Content-Type: text/markdown`; everything else falls through to the page.

### Routing Strategy

A single optional catch-all route (`app/[[...slug]]/page.tsx`) covers:

1. `/` → `pt-BR/index`
2. `/api` → `pt-BR/api`
3. `/:locale` → `:locale/index`
4. `/:locale/:page` → `:locale/:page`

Any of them also answer to a `.md` suffix. Paths deeper than two segments 404,
as they did under Sinatra.

### Key Components

**middleware.ts**: content negotiation, security headers and the per-request CSP
nonce (Next.js emits inline bootstrap scripts, so the policy allows them by
nonce instead of `'unsafe-inline'`). Also the `CANONICAL_HOST` and HTTPS
redirects that `Rack::CanonicalHost`/`Rack::SslEnforcer` used to do.

**lib/routes.ts**: path → `lang`/`page` resolution. Must stay free of Node-only
imports, since middleware runs on the edge runtime.

**lib/content.ts**: locates and reads the markdown under `views/`, rejecting
segments that could escape the directory.

**lib/markdown.ts**: markdown-it configured to match the kramdown output the
site was built on — most importantly `kramdownSlug`, which reproduces
kramdown's `auto_ids` algorithm so the anchors in the generated tables of
contents keep resolving. Results are memoised by content digest.

**components/layouts.tsx**: one entry per locale/page, replacing the old ERB
templates. `findLayout` falls back to the locale's index layout.

**scripts/**: the content generators.

- `update-api-reference.ts` renders `content/api_reference.md` from the OpenAPI spec
- `update-api-docs.ts` merges the ReadMe docs in `content/api` with that reference into `views/pt-BR/api.md`
- `update-articles.ts` turns the Intercom help center into `views/pt-BR/artigos.md`

### Multi-language Support

- Primary language: Portuguese (pt-BR)
- Secondary language: English (en-US)
- Markdown lives in `views/<locale>/<page>.md`; a flat `views/<locale>.md` is
  still honoured for the index page

### Content

Markdown under `views/` is generated; edit the scripts, not the output, unless
the file is hand-written (`views/*/index.md`).
