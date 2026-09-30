import type { Metadata } from 'next';
import { site } from '@/content/site';
import { defaultLocale, locales, type Locale, type Localized } from '@/content/types';

const openGraphLocale: Localized = { fi: 'fi_FI', en: 'en_GB', es: 'es_ES' };

interface PageMetadataInput {
  locale: Locale;
  /** Address of this page in every language (with the trailing slash). Drives canonical URL and hreflang. */
  paths: Localized;
  title: string;
  description: string;
  /** Home pages use their title as it is; every other page gets " | Oulasvirta Consulting" appended. */
  absoluteTitle?: boolean;
  /** Set for article pages. */
  article?: { published: string };
}

/**
 * Metadata shared by every page: title, description, canonical URL, hreflang
 * alternates, Open Graph and Twitter card. Relative URLs are resolved against
 * `metadataBase` (see app/layout.tsx). Nothing here ever sets `noindex`.
 */
export function pageMetadata({ locale, paths, title, description, absoluteTitle, article }: PageMetadataInput): Metadata {
  const shownTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: {
        fi: paths.fi,
        en: paths.en,
        es: paths.es,
        'x-default': paths[defaultLocale],
      },
    },
    openGraph: {
      type: article ? 'article' : 'website',
      url: paths[locale],
      siteName: site.name,
      title: shownTitle,
      description,
      locale: openGraphLocale[locale],
      alternateLocale: locales.filter((other) => other !== locale).map((other) => openGraphLocale[other]),
      ...(article ? { publishedTime: article.published, authors: [site.person.name] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: shownTitle,
      description,
    },
  };
}
