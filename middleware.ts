import { NextResponse, type NextRequest } from 'next/server';
import { wantsMarkdown } from '@/lib/negotiation';
import { normalizeHtmlLang, pathSegments, resolvePageRef } from '@/lib/routes';
import {
  LANG_HEADER,
  MARKDOWN_HEADER,
  NONCE_HEADER,
  SECURITY_HEADERS,
  contentSecurityPolicy,
  generateNonce,
} from '@/lib/security';

/** Internal path backing `text/markdown` responses; never reachable directly. */
const RAW_PREFIX = '/raw';

/** `/style.css`, `/llms.txt`, ... are served from `public/` and never negotiated. */
const STATIC_ASSET = /\.(?!md$)[a-z0-9]+$/i;

const isDev = process.env.NODE_ENV !== 'production';

/** `Rack::SslEnforcer` was production-only; `FORCE_SSL=false` opts out locally. */
const forceSsl = !isDev && process.env.FORCE_SSL !== 'false';

function withSecurityHeaders(response: NextResponse, csp: string): NextResponse {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(name, value);
  }
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const nonce = generateNonce();
  const csp = contentSecurityPolicy(nonce, isDev);

  // `Rack::SslEnforcer` equivalent.
  if (forceSsl && request.headers.get('x-forwarded-proto') === 'http') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  // The rewrite target is an implementation detail: reject direct hits.
  if (pathname === RAW_PREFIX || pathname.startsWith(`${RAW_PREFIX}/`)) {
    const notFound = new NextResponse('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
    return withSecurityHeaders(notFound, csp);
  }

  if (STATIC_ASSET.test(pathname)) {
    return withSecurityHeaders(NextResponse.next(), csp);
  }

  const segments = pathSegments(pathname);
  const headers = new Headers(request.headers);
  // Never let a client forge the internal markers.
  headers.delete(MARKDOWN_HEADER);
  headers.set(NONCE_HEADER, nonce);
  headers.set(LANG_HEADER, normalizeHtmlLang(resolvePageRef(segments).lang));
  // Next.js reads the nonce back out of the request CSP to tag its own scripts.
  headers.set('Content-Security-Policy', csp);

  if (wantsMarkdown({ pathname, userAgent: request.headers.get('user-agent') })) {
    headers.set(MARKDOWN_HEADER, '1');
    const url = request.nextUrl.clone();
    url.pathname = segments.length ? `${RAW_PREFIX}/${segments.join('/')}` : RAW_PREFIX;

    return withSecurityHeaders(NextResponse.rewrite(url, { request: { headers } }), csp);
  }

  return withSecurityHeaders(NextResponse.next({ request: { headers } }), csp);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
