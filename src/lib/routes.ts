import { defaultLocale, type Locale, type Localized } from '@/content/types';

/**
 * Public address model (kept from the prototype):
 *   Finnish (default language) at the root:  /   /kirjoituksia/<slug>/   /tietosuoja/
 *   English and Spanish under a prefix:      /en/ /en/kirjoituksia/<slug>/ /en/privacy/
 *                                            /es/ /es/kirjoituksia/<slug>/ /es/privacidad/
 * Every address ends with a slash (trailingSlash is enabled in next.config.ts).
 */
function prefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function homePath(locale: Locale): string {
  return `${prefix(locale)}/`;
}

export function articlePath(locale: Locale, slug: string): string {
  return `${prefix(locale)}/kirjoituksia/${slug}/`;
}

export const privacyPath: Localized = {
  fi: '/tietosuoja/',
  en: '/en/privacy/',
  es: '/es/privacidad/',
};

/** Builds the address of the same page in every language. */
export function inEveryLocale(path: (locale: Locale) => string): Localized {
  return { fi: path('fi'), en: path('en'), es: path('es') };
}
