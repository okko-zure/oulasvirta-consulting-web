import type { ReactNode } from 'react';
import { ui } from '@/content/ui';
import type { Locale } from '@/content/types';

interface ExternalLinkProps {
  href: string;
  locale: Locale;
  className?: string;
  children: ReactNode;
}

/**
 * A link to another website. It opens in a new tab, so it says so to screen
 * reader users (visually hidden text), and it never leaks the page address.
 */
export function ExternalLink({ href, locale, className, children }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> ({ui.opensInNewTab[locale]})</span>
    </a>
  );
}
