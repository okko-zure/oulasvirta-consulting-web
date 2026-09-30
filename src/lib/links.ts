import type { Locale, Localized } from '@/content/types';

/** Some links differ per language (for example the EUR-Lex documents); most are one plain address. */
export function resolveHref(href: string | Localized, locale: Locale): string {
  return typeof href === 'string' ? href : href[locale];
}
