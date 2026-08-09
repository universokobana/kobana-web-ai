import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocumentShell } from '@/components/document-shell';
import { findLayout } from '@/components/layouts';
import { readMarkdown } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { isRoutableDepth, resolvePageRef } from '@/lib/routes';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

// Content is read from disk per request, and the CSP nonce makes every response
// unique anyway, so there is nothing to prerender.
export const dynamic = 'force-dynamic';

function segmentsOf(slug: string[] | undefined): string[] {
  return (slug ?? []).map((segment) => segment.replace(/\.md$/, ''));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const segments = segmentsOf((await params).slug);
  if (!isRoutableDepth(segments)) return {};

  const { lang, page } = resolvePageRef(segments);
  return { title: findLayout(lang, page)?.title };
}

export default async function Page({ params }: PageProps) {
  const segments = segmentsOf((await params).slug);
  if (!isRoutableDepth(segments)) notFound();

  const ref = resolvePageRef(segments);
  const markdown = await readMarkdown(ref);
  if (markdown === null) notFound();

  const html = renderMarkdown(markdown);
  const layout = findLayout(ref.lang, ref.page);

  // No layout for this locale: serve the bare rendered markdown, as Sinatra did.
  if (!layout) return <div id="content" dangerouslySetInnerHTML={{ __html: html }} />;

  return <DocumentShell layout={layout} markdown={markdown} html={html} />;
}
