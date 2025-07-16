# Kobana Website for LLMs

This is the project that host the website for LLMs available at: https://ai.kobana.com.br

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
- For browser JS `fetch` where you can't change the `user-agent` or in scenarios where you pretend to be a browser by `user-agent` spoofing, you can add 'accept': 'text/markdown' to the header to force the `text/markdown` response.

## Updating articles

### Remove the cache file

    $ rm content/articles.json

### Fetch all articles

    $ ./bin/update-articles

### Commit and push the changes

    $ git commit -am "updates articles"
    $ git push

## Updating the API docs

### Update the readme content

    $ cd content/api && git pull --rebase && cd ../..

### Update the api page

    $ ./bin/update-api-reference && ./bin/update-api-docs

### Commit and push the changes

    $ git commit -am "updates api docs"
    $ git push

## Inspiration

This project was inspired on (https://github.com/jina-ai/meta-prompt)[https://github.com/jina-ai/meta-prompt]
