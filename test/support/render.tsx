import { renderToStaticMarkup } from 'react-dom/server';
import { NextRequest } from 'next/server';
import Page from '@/app/[[...slug]]/page';
import { GET } from '@/app/raw/[[...slug]]/route';
import { MARKDOWN_HEADER } from '@/lib/security';

/** Renders the HTML branch of a path, the way the server component tree does. */
export async function renderPage(slug?: string[]): Promise<string> {
  const element = await Page({ params: Promise.resolve({ slug }) });
  return renderToStaticMarkup(element);
}

/** Calls the raw-markdown handler as middleware would, after its rewrite. */
export function fetchMarkdown(slug?: string[]): Promise<Response> {
  const path = slug?.length ? `/raw/${slug.join('/')}` : '/raw';
  const request = new NextRequest(new URL(path, 'http://localhost:3000'), {
    headers: { [MARKDOWN_HEADER]: '1' },
  });

  return GET(request, { params: Promise.resolve({ slug }) });
}
