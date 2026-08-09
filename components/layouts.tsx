import type { ReactNode } from 'react';
import type { CopyLabels } from './copy-button';

export interface PageLayout {
  title: string;
  copy: CopyLabels;
  header: ReactNode;
  footer: ReactNode;
}

const PT_BR_COPY: CopyLabels = {
  label: 'Copiar Prompt',
  copied: 'Copiado!',
  failed: 'Falha ao copiar',
};

const EN_US_COPY: CopyLabels = {
  label: 'Copy Prompt',
  copied: 'Copied!',
  failed: 'Failed to copy',
};

const LLM_NOTICE_PT = (
  <p>
    <strong>⚠️ Nota:</strong> Este conteúdo é projetado especificamente para LLMs e não é destinado
    à leitura humana.
  </p>
);

const GITHUB_PT = (
  <p>
    ✨{' '}
    <a href="https://github.com/universokobana/kobana-web-ai/">
      Confira nosso Github para mais informações
    </a>
  </p>
);

/** One entry per former `views/layouts/<lang>/<page>.erb` template. */
export const LAYOUTS: Record<string, PageLayout> = {
  'pt-BR/index': {
    title: 'Kobana - Site Completo para LLMs',
    copy: PT_BR_COPY,
    header: (
      <>
        {LLM_NOTICE_PT}
        <p>
          👉 Para conteúdo legível por humanos, por favor visite{' '}
          <a href="https://www.kobana.com.br">www.kobana.com.br</a>.
        </p>
        <p>🤖 Para LLMs/acesso programático, você pode buscar esse conteúdo diretamente.:</p>
        <code className="inline-code">curl ai.kobana.com.br</code>
        <p>
          🇺🇸 To see this content in english, please visit{' '}
          <a href="/en-US">ai.kobana.com.br/en-US</a>
        </p>
        <p>
          Para visualizar os artigos da base de conhecimento da Kobana, acesse{' '}
          <a href="/pt-BR/artigos">ai.kobana.com.br/pt-BR/artigos</a>
        </p>
        <p>
          Para visualizar a documentação da API da Kobana, acesse{' '}
          <a href="/pt-BR/api">ai.kobana.com.br/pt-BR/api</a>
        </p>
        <p>
          🌐 Você vê este HTML porque está em um navegador. Se acessar via curl/código/programa,
          receberá uma resposta em texto/markdown como abaixo. Você também pode acessar o markdown
          diretamente em <a href="/pt-BR.md">ai.kobana.com.br/pt-BR.md</a>
        </p>
        {GITHUB_PT}
      </>
    ),
    footer: (
      <>
        <p>
          Para conteúdo legível por humanos, por favor visite{' '}
          <a href="https://www.kobana.com.br">www.kobana.com.br</a>
        </p>
        <p>
          Para acesso direto ao conteúdo: <code>curl ai.kobana.com.br/pt-BR</code>
        </p>
      </>
    ),
  },

  'pt-BR/api': {
    title: 'Kobana - Documentação da API para LLMs',
    copy: PT_BR_COPY,
    header: (
      <>
        {LLM_NOTICE_PT}
        <p>
          👉 Para conteúdo legível por humanos, por favor visite{' '}
          <a href="https://developers.kobana.com.br">developers.kobana.com.br</a>.
        </p>
        <p>🤖 Para LLMs/acesso programático, você pode buscar esse conteúdo diretamente.:</p>
        <code className="inline-code">curl ai.kobana.com.br/pt-BR/api</code>
        <p>
          Este conteúdo é a documentação da API da Kobana, para visualizar o site comercial, visite{' '}
          <a href="/pt-BR">ai.kobana.com.br/pt-BR</a>.
        </p>
        <p>
          Para visualizar os artigos da base de conhecimento da Kobana, acesse{' '}
          <a href="/pt-BR/artigos">ai.kobana.com.br/pt-BR/artigos</a>
        </p>
        <p>
          🌐 Você vê este HTML porque está em um navegador. Se acessar via curl/código/programa,
          receberá uma resposta em texto/markdown como abaixo. Você também pode acessar o markdown
          diretamente em <a href="/pt-BR/api.md">ai.kobana.com.br/pt-BR/api.md</a>
        </p>
        {GITHUB_PT}
      </>
    ),
    footer: (
      <>
        <p>
          Para conteúdo legível por humanos, por favor visite{' '}
          <a href="https://developers.kobana.com.br">developers.kobana.com.br</a>
        </p>
        <p>
          Para acesso direto ao conteúdo: <code>curl ai.kobana.com.br/pt-BR/api</code>
        </p>
      </>
    ),
  },

  'pt-BR/artigos': {
    title: 'Kobana - Site com Artigos da Base de Conhecimento para LLMs',
    copy: PT_BR_COPY,
    header: (
      <>
        {LLM_NOTICE_PT}
        <p>
          👉 Para conteúdo legível por humanos, por favor visite{' '}
          <a href="https://ajuda.kobana.com.br">ajuda.kobana.com.br</a>.
        </p>
        <p>🤖 Para LLMs/acesso programático, você pode buscar esse conteúdo diretamente.:</p>
        <code className="inline-code">curl ai.kobana.com.br/pt-BR/artigos</code>
        <p>
          Este conteúdo é a base de conhecimento com todos os artigos da Kobana, para visualizar o
          site comercial, visite <a href="/pt-BR">ai.kobana.com.br/pt-BR</a>.
        </p>
        <p>
          Para visualizar a documentação da API da Kobana, acesse{' '}
          <a href="/pt-BR/api">ai.kobana.com.br/pt-BR/api</a>
        </p>
        <p>
          🌐 Você vê este HTML porque está em um navegador. Se acessar via curl/código/programa,
          receberá uma resposta em texto/markdown como abaixo. Você também pode acessar o markdown
          diretamente em <a href="/pt-BR/artigos.md">ai.kobana.com.br/pt-BR/artigos.md</a>
        </p>
        {GITHUB_PT}
      </>
    ),
    footer: (
      <>
        <p>
          Para conteúdo legível por humanos, por favor visite{' '}
          <a href="https://ajuda.kobana.com.br">ajuda.kobana.com.br</a>
        </p>
        <p>
          Para acesso direto ao conteúdo: <code>curl ai.kobana.com.br/pt-BR/artigos</code>
        </p>
      </>
    ),
  },

  'en-US/index': {
    title: 'Kobana - Complete Website for LLMs',
    copy: EN_US_COPY,
    header: (
      <>
        <p>
          <strong>⚠️ Note:</strong> This content is specifically designed for LLMs and not intended
          for human reading.
        </p>
        <p>
          👉 For human-readable content, please visit{' '}
          <a href="https://www.kobana.com.br">Kobana Website</a>.
        </p>
        <p>🤖 For LLMs/programmatic access, you can fetch this content directly:</p>
        <code className="inline-code">curl ai.kobana.com.br</code>
        <p>
          🇺🇸 Para ver esse conteúdo em Português, por favor visite{' '}
          <a href="/pt-BR">ai.kobana.com.br/pt-BR</a>
        </p>
        <p>
          🌐 You see this HTML because you are in a browser. If you access it via curl/code/program,
          you get a text/markdown response as below. You can also access the markdown directly at{' '}
          <a href="/en-US.md">ai.kobana.com.br/en-US.md</a>
        </p>
        <p>
          ✨{' '}
          <a href="https://github.com/universokobana/kobana-web-ai/">
            Check out our Github for more info
          </a>
        </p>
      </>
    ),
    footer: (
      <>
        <p>
          For human-readable content, please visit{' '}
          <a href="https://www.kobana.com.br">www.kobana.com.br</a>
        </p>
        <p>
          For direct content access: <code>curl ai.kobana.com.br/en-US</code>
        </p>
      </>
    ),
  },
};

/** Mirrors the Sinatra lookup: exact template, then the locale's index, then none. */
export function findLayout(lang: string, page: string): PageLayout | null {
  return LAYOUTS[`${lang}/${page}`] ?? LAYOUTS[`${lang}/index`] ?? null;
}
