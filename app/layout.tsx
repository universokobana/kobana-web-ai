import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { DEFAULT_LOCALE } from '@/lib/routes';
import { LANG_HEADER } from '@/lib/security';
import './globals.css';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = (await headers()).get(LANG_HEADER) || DEFAULT_LOCALE;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
