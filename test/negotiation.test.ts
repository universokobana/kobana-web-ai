import { describe, expect, it } from 'vitest';
import { isBotUserAgent, wantsMarkdown } from '@/lib/negotiation';

describe('isBotUserAgent', () => {
  it.each([
    'python-requests/2.31.0',
    'Googlebot/2.1',
    'curl/8.4.0',
    'Wget/1.21',
    'axios/1.6.0',
    'PostmanRuntime/7.36.0',
    'Go-http-client/2.0',
    'node-fetch/3.3.2',
  ])('treats %s as a bot', (userAgent) => {
    expect(isBotUserAgent(userAgent)).toBe(true);
  });

  it.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) Safari/604.1',
  ])('treats %s as a browser', (userAgent) => {
    expect(isBotUserAgent(userAgent)).toBe(false);
  });

  it('treats a missing user agent as a browser', () => {
    expect(isBotUserAgent(null)).toBe(false);
    expect(isBotUserAgent(undefined)).toBe(false);
  });
});

describe('wantsMarkdown', () => {
  it('honours the .md extension regardless of the user agent', () => {
    expect(wantsMarkdown({ pathname: '/pt-BR.md', userAgent: 'Mozilla/5.0' })).toBe(true);
    expect(wantsMarkdown({ pathname: '/pt-BR/artigos.md', userAgent: 'Mozilla/5.0' })).toBe(true);
  });

  it('serves HTML to browsers on extensionless paths', () => {
    expect(wantsMarkdown({ pathname: '/pt-BR', userAgent: 'Mozilla/5.0' })).toBe(false);
  });

  it('serves markdown to bots on extensionless paths', () => {
    expect(wantsMarkdown({ pathname: '/pt-BR', userAgent: 'curl/8.4.0' })).toBe(true);
  });
});
