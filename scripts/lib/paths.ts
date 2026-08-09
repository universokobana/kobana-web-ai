import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const CONTENT_DIR = path.join(ROOT_DIR, 'content');
export const VIEWS_DIR = path.join(ROOT_DIR, 'views');

/**
 * Slug used by the generators when building table-of-contents anchors. Kept
 * identical to the Ruby helpers (`slug` / `normalize_anchor`) it replaces.
 */
export function anchorSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
