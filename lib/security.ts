/** Header name used to hand the per-request CSP nonce to server components. */
export const NONCE_HEADER = 'x-kobana-nonce';

/** Header name used to hand the resolved locale to the root layout. */
export const LANG_HEADER = 'x-kobana-lang';

/** Marks a request that middleware rewrote to the raw-markdown handler. */
export const MARKDOWN_HEADER = 'x-kobana-markdown';

export const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

/**
 * The Sinatra policy, adapted to Next.js: the framework emits inline bootstrap
 * scripts, so they are allowed through a per-request nonce plus `strict-dynamic`
 * (which lets those scripts pull in their own chunks) instead of `'unsafe-inline'`.
 */
export function contentSecurityPolicy(nonce: string, isDev = false): string {
  const script = isDev
    ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  return [
    "default-src 'none'",
    `script-src ${script}`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data:",
    "font-src 'self'",
    isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
  ].join('; ');
}

export function generateNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes));
}
