import type { ReactNode } from 'react';
import { navigation } from '@/content/navigation';
import type { Locale, Localized } from '@/content/types';
import { homePath } from '@/lib/routes';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

interface PageFrameProps {
  locale: Locale;
  /** The current page in every language (language switch). */
  paths: Localized;
  /** True on the home page: its anchors stay on the page instead of leading to the home page. */
  home?: boolean;
  children: ReactNode;
}

/** Skip link, header, main content area and footer that every page shares. */
export function PageFrame({ locale, paths, home = false, children }: PageFrameProps) {
  const anchorBase = home ? '' : homePath(locale);
  return (
    <>
      <a className="skip-link" href="#sisalto">
        {navigation.skipLink[locale]}
      </a>
      <SiteHeader locale={locale} paths={paths} anchorBase={anchorBase} />
      <main id="sisalto">{children}</main>
      <SiteFooter locale={locale} anchorBase={anchorBase} />
    </>
  );
}
