import { describe, expect, it } from 'vitest';
import { fetchMarkdown, renderPage } from './support/render';

/** Port of `spec/application_spec.rb`. */
describe('pages', () => {
  describe('/', () => {
    it('renders the pt-BR index in HTML', async () => {
      const html = await renderPage(undefined);

      expect(html).toMatch(/Plataforma financeira com IA nativa/);
      expect(html).toMatch(/Este conteúdo é projetado especificamente para LLMs/);
    });

    it('serves the pt-BR index as markdown', async () => {
      const response = await fetchMarkdown(undefined);

      expect(response.status).toBe(200);
      expect(response.headers.get('content-type')).toBe('text/markdown; charset=utf-8');
      expect(await response.text()).toMatch(/# Kobana - Plataforma financeira com IA nativa/);
    });
  });

  describe('/pt-BR', () => {
    it('renders HTML for browsers', async () => {
      const html = await renderPage(['pt-BR']);

      expect(html).toMatch(/Plataforma financeira com IA nativa/);
      expect(html).toMatch(/Este conteúdo é projetado especificamente para LLMs/);
    });

    it('serves markdown without the HTML chrome', async () => {
      const body = await (await fetchMarkdown(['pt-BR'])).text();

      expect(body).toMatch(/Kobana - Plataforma financeira com IA nativa/);
      expect(body).not.toMatch(/Este conteúdo é projetado especificamente para LLMs/);
    });
  });

  describe('/en-US', () => {
    it('renders HTML for browsers', async () => {
      const html = await renderPage(['en-US']);

      expect(html).toMatch(/Kobana - Financial Platform with Native AI/);
      expect(html).toMatch(/This content is specifically designed for LLMs/);
    });

    it('serves markdown without the HTML chrome', async () => {
      const body = await (await fetchMarkdown(['en-US'])).text();

      expect(body).toMatch(/# Kobana - Financial Platform with Native AI/);
      expect(body).not.toMatch(/This content is specifically designed for LLMs/);
    });
  });

  describe('unknown pages', () => {
    it('renders a 404 page', async () => {
      await expect(renderPage(['notfound'])).rejects.toThrow(/NEXT_HTTP_ERROR_FALLBACK;404/);
    });

    it('answers 404 with a plain body for markdown', async () => {
      const response = await fetchMarkdown(['notfound']);

      expect(response.status).toBe(404);
      expect(await response.text()).toBe('Not Found');
    });

    it('rejects paths deeper than /lang/page', async () => {
      expect((await fetchMarkdown(['pt-BR', 'api', 'extra'])).status).toBe(404);
    });

    it('refuses to escape the views directory', async () => {
      expect((await fetchMarkdown(['..', '..'])).status).toBe(404);
    });
  });

  describe('nested pages', () => {
    it('renders /pt-BR/artigos', async () => {
      const html = await renderPage(['pt-BR', 'artigos']);

      expect(html).toMatch(/Artigos da Base de Conhecimento/);
    });

    it('serves /pt-BR/artigos as markdown', async () => {
      const response = await fetchMarkdown(['pt-BR', 'artigos']);

      expect(response.status).toBe(200);
      expect(response.headers.get('content-type')).toBe('text/markdown; charset=utf-8');
    });

    it('renders /pt-BR/api', async () => {
      const html = await renderPage(['pt-BR', 'api']);

      expect(html).toMatch(/Documentação da API da Kobana/);
    });

    it('maps the /api shortcut onto the pt-BR API page', async () => {
      const html = await renderPage(['api']);

      expect(html).toMatch(/Documentação da API da Kobana/);
    });
  });

  describe('raw markdown handler', () => {
    it('is unreachable without the middleware marker', async () => {
      const { GET } = await import('@/app/raw/[[...slug]]/route');
      const { NextRequest } = await import('next/server');

      const response = await GET(new NextRequest(new URL('http://localhost:3000/raw/pt-BR')), {
        params: Promise.resolve({ slug: ['pt-BR'] }),
      });

      expect(response.status).toBe(404);
    });
  });
});
