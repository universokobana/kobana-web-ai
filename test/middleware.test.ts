import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { middleware } from '@/middleware';
import { LANG_HEADER } from '@/lib/security';

function get(pathname: string, userAgent = 'Mozilla/5.0') {
  const request = new NextRequest(new URL(pathname, 'http://localhost:3000'), {
    headers: { 'user-agent': userAgent },
  });

  return middleware(request);
}

/** `NextResponse.rewrite` records its target in an internal header. */
function rewriteTarget(response: Response): string | null {
  const value = response.headers.get('x-middleware-rewrite');
  return value ? new URL(value, 'http://localhost:3000').pathname : null;
}

describe('middleware', () => {
  it('leaves browser requests on the HTML page', () => {
    expect(rewriteTarget(get('/pt-BR'))).toBeNull();
  });

  it('rewrites bot requests to the markdown handler', () => {
    expect(rewriteTarget(get('/pt-BR', 'curl/8.4.0'))).toBe('/raw/pt-BR');
    expect(rewriteTarget(get('/', 'curl/8.4.0'))).toBe('/raw');
    expect(rewriteTarget(get('/pt-BR/artigos', 'python-requests/2.31.0'))).toBe(
      '/raw/pt-BR/artigos',
    );
  });

  it('rewrites .md requests even from browsers', () => {
    expect(rewriteTarget(get('/pt-BR.md'))).toBe('/raw/pt-BR');
    expect(rewriteTarget(get('/pt-BR/artigos.md'))).toBe('/raw/pt-BR/artigos');
  });

  it('never negotiates static assets, even for bots', () => {
    expect(rewriteTarget(get('/llms.txt', 'curl/8.4.0'))).toBeNull();
    expect(rewriteTarget(get('/favicon.ico', 'curl/8.4.0'))).toBeNull();
  });

  it('hides the internal rewrite target', () => {
    expect(get('/raw/pt-BR').status).toBe(404);
    expect(get('/raw').status).toBe(404);
  });

  it('sets the security headers and a per-request nonce', () => {
    const response = get('/pt-BR');
    const csp = response.headers.get('Content-Security-Policy') ?? '';

    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(response.headers.get('X-Frame-Options')).toBe('SAMEORIGIN');
    expect(csp).toMatch(/script-src 'self' 'nonce-[^']+' 'strict-dynamic'/);
    expect(csp).not.toBe(get('/pt-BR').headers.get('Content-Security-Policy'));
  });

  it('passes the resolved locale to the root layout', () => {
    const headers = get('/en-US').headers.get('x-middleware-override-headers');

    expect(headers).toContain(LANG_HEADER);
  });
});
