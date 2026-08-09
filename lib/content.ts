import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { DEFAULT_PAGE, type PageRef } from './routes';

/** Where the markdown served by the site lives. */
export const VIEWS_DIR = path.join(process.cwd(), 'views');

/** Rejects segments that could escape `views/` (`..`, `/`, null bytes, ...). */
function isSafeSegment(segment: string): boolean {
  return /^[\w.-]+$/.test(segment) && segment !== '.' && segment !== '..';
}

/**
 * Files that may back a page, in lookup order.
 *
 * Besides the `views/<lang>/<page>.md` layout, flat `views/<lang>.md` files are
 * still honoured for the index page, for backwards compatibility.
 */
export function candidatePaths({ lang, page }: PageRef): string[] {
  if (!isSafeSegment(lang) || !isSafeSegment(page)) return [];

  const candidates = [path.join(VIEWS_DIR, lang, `${page}.md`)];
  if (page === DEFAULT_PAGE) candidates.push(path.join(VIEWS_DIR, `${lang}.md`));

  return candidates;
}

/** Reads the markdown backing a page, or returns `null` when there is none. */
export async function readMarkdown(ref: PageRef): Promise<string | null> {
  for (const candidate of candidatePaths(ref)) {
    try {
      return await readFile(candidate, 'utf8');
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') continue;
      throw error;
    }
  }

  return null;
}
