import '@/styles/globals.css';
import type { ReactNode } from 'react';
import type { Locale } from '@/content/types';

/**
 * The <html> and <body> of a page. Every language has its own root layout
 * (see src/app/(fi), en and es) so that the `lang` attribute is correct in the
 * static HTML of every page.
 */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
