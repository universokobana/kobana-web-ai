import { CopyButton } from './copy-button';
import type { PageLayout } from './layouts';

interface DocumentShellProps {
  layout: PageLayout;
  markdown: string;
  html: string;
}

/** The chrome the ERB layouts used to wrap every rendered markdown page in. */
export function DocumentShell({ layout, markdown, html }: DocumentShellProps) {
  return (
    <>
      <header>{layout.header}</header>
      <main>
        <CopyButton labels={layout.copy} />
        <pre className="hidden-pre">{markdown}</pre>
        <div id="content" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer>{layout.footer}</footer>
    </>
  );
}
