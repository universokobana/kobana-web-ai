/**
 * Fetches the Intercom help-center articles and renders them as the single
 * `views/pt-BR/artigos.md` page. The raw API payload is cached in
 * `content/articles.json`; pass `--force` to refetch it.
 *
 * Port of the former `bin/update-articles`.
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { requireEnv } from './lib/env';
import { CONTENT_DIR, VIEWS_DIR, anchorSlug } from './lib/paths';

const BASE_URL = 'https://api.intercom.io';
const ARTICLES_ENDPOINT = '/articles';
const INTERCOM_VERSION = '2.11';
const ARTICLES_JSON = path.join(CONTENT_DIR, 'articles.json');
const OUTPUT_FILE = path.join(VIEWS_DIR, 'pt-BR', 'artigos.md');

interface Article {
  id: string;
  title: string;
  state: string;
  url: string | null;
  body: string | null;
  description?: string | null;
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined',
}).use(gfm);

async function fetchPage(token: string, url: string): Promise<any> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Intercom-Version': INTERCOM_VERSION,
    },
  });

  if (!response.ok) {
    console.error(`Error fetching articles: ${response.status} - ${await response.text()}`);
    process.exit(1);
  }

  return response.json();
}

async function fetchAllArticles(token: string): Promise<Article[]> {
  console.log('Fetching articles from Intercom API...');

  const articles: Article[] = [];
  let nextPage: string | null = `${BASE_URL}${ARTICLES_ENDPOINT}`;

  while (nextPage) {
    const data = await fetchPage(token, nextPage);
    if (data.data) articles.push(...data.data);

    nextPage = data.pages?.next ?? null;
    if (nextPage) console.log('Fetching next page...');
  }

  return articles;
}

/** Renders one article, or `null` when it should not be published. */
function articleAsMarkdown(article: Article): string[] | null {
  if (article.state !== 'published') return null;
  if (!article.url) return null;
  if (!article.body) return null;

  const lines = [`# ${article.title}`, ''];

  if (article.description) {
    lines.push('## Descrição', '', article.description, '');
  }

  lines.push('## Conteúdo', '', turndown.turndown(article.body));
  lines.push('', '---', '');

  return lines;
}

async function loadArticles(force: boolean): Promise<Article[]> {
  if (force && existsSync(ARTICLES_JSON)) {
    console.log('Removing existing articles.json due to --force option...');
    await rm(ARTICLES_JSON);
  }

  if (existsSync(ARTICLES_JSON)) {
    console.log('Index file already exists. Skipping update.');
    return JSON.parse(await readFile(ARTICLES_JSON, 'utf8'));
  }

  const articles = await fetchAllArticles(requireEnv('INTERCOM_API_TOKEN'));
  await writeFile(ARTICLES_JSON, JSON.stringify(articles, null, 2));

  return articles;
}

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: { force: { type: 'boolean', short: 'f', default: false } },
  });

  await mkdir(CONTENT_DIR, { recursive: true });

  const articles = await loadArticles(values.force);
  console.log(`Found ${articles.length} articles`);

  const index: string[] = [];
  const body: string[] = [];

  for (const article of articles) {
    const content = articleAsMarkdown(article);
    if (!content) continue;

    console.log(`⚙️  ${article.title} (ID: ${article.id})`);
    index.push(`${index.length + 1}. [${article.title}](#${anchorSlug(article.title)})`);
    body.push(...content);
  }

  const markdown = [
    '# Kobana - Artigos da Base de Conhecimento',
    '',
    '## Índice de Conteúdos',
    ...index,
    '',
    '---',
    '',
    ...body,
  ];

  await writeFile(OUTPUT_FILE, markdown.join('\n'));

  console.log(`✅  Done! Processed ${articles.length} articles`);
}

main().catch((error: Error) => {
  console.error(`🚨 ERROR: ${error.message}`);
  process.exit(1);
});
