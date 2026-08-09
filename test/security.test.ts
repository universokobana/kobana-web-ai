import { describe, expect, it } from 'vitest';
import { SECURITY_HEADERS, contentSecurityPolicy, generateNonce } from '@/lib/security';

describe('SECURITY_HEADERS', () => {
  it('carries every header the Sinatra app set', () => {
    expect(SECURITY_HEADERS).toMatchObject({
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    });
  });
});

describe('contentSecurityPolicy', () => {
  it('locks everything down and allows scripts only through the nonce', () => {
    const csp = contentSecurityPolicy('abc123');

    expect(csp).toContain("default-src 'none'");
    expect(csp).toContain("script-src 'self' 'nonce-abc123' 'strict-dynamic'");
    expect(csp).toContain("style-src 'self' 'nonce-abc123'");
    expect(csp).toContain("frame-ancestors 'self'");
    expect(csp).not.toContain('unsafe-inline');
    expect(csp).not.toContain('unsafe-eval');
  });

  it('relaxes only what the dev server needs', () => {
    const csp = contentSecurityPolicy('abc123', true);

    expect(csp).toContain("'unsafe-eval'");
    expect(csp).toContain('ws:');
    expect(csp).not.toContain('unsafe-inline');
  });
});

describe('generateNonce', () => {
  it('produces a fresh value per call', () => {
    expect(generateNonce()).not.toBe(generateNonce());
  });
});
