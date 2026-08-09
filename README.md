# Kobana Website for LLMs

This is the project that host the website for LLMs available at: https://ai.kobana.com.br

Built with [Next.js](https://nextjs.org) (App Router) and TypeScript.

## Languages

Brazilian Portuguese (default): https://ai.kobana.com.br/pt-BR
English: https://ai.kobana.com.br/en-US

## Usage

- `curl ai.kobana.com.br/en-US`: load the content in english and in markdown.
- Pipe into [`llm`](https://github.com/simonw/llm):

```bash
curl ai.kobana.com.br/en-US.md | llm -s 'understand Kobana platform' -m claude-3.5-sonnet
```

## Note

- Opening ai.kobana.com.br/en-US in a browser gives you a `text/html` response, but programmatic access gives you a clean `text/markdown` response. This is due to the `user-agent` value.
- Appending `.md` to any path forces the `text/markdown` response, whatever the `user-agent` is.

## Development

Requires Node.js (see `.nvmrc`).

    $ npm install
    $ npm run dev

Other tasks:

| Command             | Description                 |
| ------------------- | --------------------------- |
| `npm run build`     | Production build            |
| `npm start`         | Serve the production build  |
| `npm test`          | Run the test suite (Vitest) |
| `npm run lint`      | ESLint                      |
| `npm run typecheck` | `tsc --noEmit`              |
| `npm run format`    | Prettier                    |

### Environment variables

| Variable             | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `CANONICAL_HOST`     | Redirects every other host to this one.                                   |
| `FORCE_SSL`          | Set to `false` to disable the HTTPS redirect when running a local build.  |
| `INTERCOM_API_TOKEN` | Used by `npm run update-articles`. Supports `op://` 1Password references. |

## Layout

    app/            routes: the HTML page, the raw markdown handler and the root layout
    components/     the page chrome, one entry per locale/page in `components/layouts.tsx`
    lib/            content negotiation, file lookup and the markdown renderer
    scripts/        content generators
    views/          the markdown served by the site, per locale
    public/         static assets

## Updating articles

### Fetch all articles

    $ npm run update-articles -- --force

Without `--force` the cached `content/articles.json` is reused.

### Commit and push the changes

    $ git commit -am "updates articles"
    $ git push

## Updating the API docs

### Update the api page

    $ npm run update-api-reference && npm run update-api-docs

`update-api-docs` pulls (or clones) the ReadMe documentation into `content/api` on
its own.

### Commit and push the changes

    $ git commit -am "updates api docs"
    $ git push

## Inspiration

This project was inspired on (https://github.com/jina-ai/meta-prompt)[https://github.com/jina-ai/meta-prompt]
