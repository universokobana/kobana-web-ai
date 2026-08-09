import type { NextRequest } from 'next/server';
import { readMarkdown } from '@/lib/content';
import { isRoutableDepth, resolvePageRef } from '@/lib/routes';
import { MARKDOWN_HEADER } from '@/lib/security';

export const dynamic = 'force-dynamic';

const NOT_FOUND = () =>
  new Response('Not Found', {
    status: 404,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

/**
 * Serves the raw markdown for a page. Only reachable through the middleware
 * rewrite that handles content negotiation — direct requests to `/raw/*` are
 * rejected there.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
): Promise<Response> {
  if (request.headers.get(MARKDOWN_HEADER) !== '1') return NOT_FOUND();

  const segments = ((await params).slug ?? []).map((segment) => segment.replace(/\.md$/, ''));
  if (!isRoutableDepth(segments)) return NOT_FOUND();

  const markdown = await readMarkdown(resolvePageRef(segments));
  if (markdown === null) return NOT_FOUND();

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
