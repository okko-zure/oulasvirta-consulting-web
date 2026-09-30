import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/content/site';

/**
 * Pass-through root layout. The <html> element (and with it the `lang`
 * attribute) is rendered by the layout of each language: src/app/(fi),
 * src/app/en and src/app/es. What every page shares is defined here.
 *
 * `robots` is deliberately not set anywhere: pages are indexable by default.
 * (The prototype had `noindex, nofollow` on every page.)
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  authors: [{ name: site.person.name }],
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
