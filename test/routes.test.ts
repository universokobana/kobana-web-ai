import { describe, expect, it } from 'vitest';
import { candidatePaths } from '@/lib/content';
import { isRoutableDepth, normalizeHtmlLang, pathSegments, resolvePageRef } from '@/lib/routes';

describe('pathSegments', () => {
  it.each([
    ['/', []],
    ['/pt-BR', ['pt-BR']],
    ['/pt-BR.md', ['pt-BR']],
    ['/pt-BR/artigos', ['pt-BR', 'artigos']],
    ['/pt-BR/artigos.md', ['pt-BR', 'artigos']],
    ['/pt-BR/artigos/', ['pt-BR', 'artigos']],
  ])('splits %s', (pathname, expected) => {
    expect(pathSegments(pathname)).toEqual(expected);
  });
});

describe('resolvePageRef', () => {
  it.each([
    [[], { lang: 'pt-BR', page: 'index' }],
    [['api'], { lang: 'pt-BR', page: 'api' }],
    [['pt-BR'], { lang: 'pt-BR', page: 'index' }],
    [['en-US'], { lang: 'en-US', page: 'index' }],
    [['pt-BR', 'artigos'], { lang: 'pt-BR', page: 'artigos' }],
    [['pt-BR', 'api'], { lang: 'pt-BR', page: 'api' }],
  ])('maps %j', (segments, expected) => {
    expect(resolvePageRef(segments)).toEqual(expected);
  });

  it('does not treat a nested api page as the shortcut', () => {
    expect(resolvePageRef(['en-US', 'api'])).toEqual({ lang: 'en-US', page: 'api' });
  });
});

describe('isRoutableDepth', () => {
  it('accepts up to two segments', () => {
    expect(isRoutableDepth([])).toBe(true);
    expect(isRoutableDepth(['pt-BR', 'api'])).toBe(true);
    expect(isRoutableDepth(['pt-BR', 'api', 'v2'])).toBe(false);
  });
});

describe('normalizeHtmlLang', () => {
  it('keeps well-formed locales', () => {
    expect(normalizeHtmlLang('pt-BR')).toBe('pt-BR');
    expect(normalizeHtmlLang('en-US')).toBe('en-US');
    expect(normalizeHtmlLang('fr')).toBe('fr');
  });

  it('falls back to the default locale for anything else', () => {
    expect(normalizeHtmlLang('notfound')).toBe('pt-BR');
    expect(normalizeHtmlLang('')).toBe('pt-BR');
  });
});

describe('candidatePaths', () => {
  it('looks for the nested file, then the flat one for indexes', () => {
    expect(candidatePaths({ lang: 'pt-BR', page: 'index' })).toEqual([
      expect.stringContaining('views/pt-BR/index.md'),
      expect.stringContaining('views/pt-BR.md'),
    ]);
  });

  it('only looks for the nested file on inner pages', () => {
    expect(candidatePaths({ lang: 'pt-BR', page: 'artigos' })).toEqual([
      expect.stringContaining('views/pt-BR/artigos.md'),
    ]);
  });

  it.each([['..'], ['../etc'], ['pt/BR'], ['']])('rejects the unsafe segment %j', (segment) => {
    expect(candidatePaths({ lang: segment, page: 'index' })).toEqual([]);
    expect(candidatePaths({ lang: 'pt-BR', page: segment })).toEqual([]);
  });
});
