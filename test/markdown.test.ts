import { describe, expect, it } from 'vitest';
import { kramdownSlug, renderMarkdown } from '@/lib/markdown';

describe('kramdownSlug', () => {
  // Expectations captured from `Kramdown::Document#to_html` so existing anchors
  // in the generated pages keep resolving.
  it.each([
    [
      'Kobana - Plataforma financeira com IA nativa',
      'kobana---plataforma-financeira-com-ia-nativa',
    ],
    ['1. Visão Geral da Kobana', 'viso-geral-da-kobana'],
    ['O que é a Kobana', 'o-que--a-kobana'],
    ['API: Boletos / Cobranças (v2)', 'api-boletos--cobranas-v2'],
    ['2024 Year', 'year'],
    ['Emissão de boletos — guia', 'emisso-de-boletos--guia'],
    ['a  b   c', 'a--b---c'],
    ['!!!', 'section'],
  ])('slugs %j', (title, expected) => {
    expect(kramdownSlug(title)).toBe(expected);
  });
});

describe('renderMarkdown', () => {
  it('adds kramdown-compatible ids to headings', () => {
    const html = renderMarkdown('## Visão Geral\n\n## O que é a Kobana\n');

    expect(html).toContain('<h2 id="viso-geral">');
    expect(html).toContain('<h2 id="o-que--a-kobana">');
  });

  it('strips inline markup before slugging, as kramdown does', () => {
    expect(renderMarkdown('## _underscore_ **bold** `code`\n')).toContain(
      '<h2 id="underscore-bold-code">',
    );
  });

  it('suffixes duplicated ids', () => {
    const html = renderMarkdown('## Duplicate\n\n## Duplicate\n\n## Duplicate\n');

    expect(html).toContain('<h2 id="duplicate">');
    expect(html).toContain('<h2 id="duplicate-1">');
    expect(html).toContain('<h2 id="duplicate-2">');
  });

  it('renders lists, tables and fenced code', () => {
    const html = renderMarkdown(
      [
        '- one',
        '- two',
        '',
        '| a | b |',
        '| - | - |',
        '| 1 | 2 |',
        '',
        '```ruby',
        'x = 1',
        '```',
      ].join('\n'),
    );

    expect(html).toContain('<li>one</li>');
    expect(html).toContain('<table>');
    expect(html).toContain('<code class="language-ruby">');
  });

  it('applies smart typography like kramdown', () => {
    expect(renderMarkdown('a --- b\n')).toContain('—');
  });

  it('returns the memoised result for identical sources', () => {
    const source = '# Cache\n';

    expect(renderMarkdown(source)).toBe(renderMarkdown(source));
  });
});
