export const DEFAULT_LOCALE = 'pt-BR';
export const DEFAULT_PAGE = 'index';

export interface PageRef {
  lang: string;
  page: string;
}

/** Splits a URL path into segments, dropping the `.md` extension. */
export function pathSegments(pathname: string): string[] {
  return pathname.replace(/\.md$/, '').split('/').filter(Boolean);
}

/**
 * Maps URL path segments to a `lang`/`page` pair, mirroring the routes of the
 * previous Sinatra app:
 *
 *   /                 -> pt-BR / index
 *   /api              -> pt-BR / api
 *   /pt-BR            -> pt-BR / index
 *   /pt-BR/artigos    -> pt-BR / artigos
 *
 * Segments are expected to already have any `.md` extension stripped.
 */
export function resolvePageRef(segments: string[]): PageRef {
  const [first, second] = segments;

  if (!first) return { lang: DEFAULT_LOCALE, page: DEFAULT_PAGE };
  if (segments.length === 1 && first === 'api') {
    return { lang: DEFAULT_LOCALE, page: 'api' };
  }

  return { lang: first, page: second || DEFAULT_PAGE };
}

/** The Sinatra route only ever matched `/lang` and `/lang/page`. */
export function isRoutableDepth(segments: string[]): boolean {
  return segments.length <= 2;
}

/**
 * Keeps `<html lang>` sane for paths whose first segment is not a locale
 * (`/notfound` and friends), which would otherwise leak into the markup.
 */
export function normalizeHtmlLang(lang: string): string {
  return /^[a-z]{2}(-[A-Z]{2})?$/.test(lang) ? lang : DEFAULT_LOCALE;
}
