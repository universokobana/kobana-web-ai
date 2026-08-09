'use client';

import { useRef, useState } from 'react';

export interface CopyLabels {
  label: string;
  copied: string;
  failed: string;
}

/**
 * Copies the raw markdown rendered in the hidden `<pre>` next to it. Reads the
 * text from the DOM rather than taking it as a prop so the (often megabyte
 * sized) source is not serialised a second time into the client payload.
 */
export function CopyButton({ labels }: { labels: CopyLabels }) {
  const [text, setText] = useState(labels.label);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    const source = document.querySelector('pre')?.textContent ?? '';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(source);
        setText(labels.copied);
      } else {
        setText(copyViaTextarea(source) ? labels.copied : labels.failed);
      }
    } catch {
      setText(labels.failed);
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setText(labels.label), 2000);
  }

  return (
    <button id="copyButton" type="button" onClick={copy}>
      {text}
    </button>
  );
}

/** Fallback for browsers without the async clipboard API (or over plain HTTP). */
function copyViaTextarea(source: string): boolean {
  const textArea = document.createElement('textarea');
  textArea.value = source;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    textArea.remove();
  }
}
