import type { MetadataRoute } from 'next';
import { articles } from '@/content/articles';
import { site } from '@/content/site';
import { locales, type Localized } from '@/content/types';
import { articlePath, homePath, inEveryLocale, privacyPath } from '@/lib/routes';

/**
 * Every public page in every language, each with links to its translations
 * (hreflang). New pages must be added here; the smoke test compares this list
 * with what the site actually serves.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = (paths: Localized, lastModified?: string): MetadataRoute.Sitemap => {
    const languages = { ...paths, 'x-default': paths.fi };
    return locales.map((locale) => ({
      url: `${site.url}${paths[locale]}`,
      ...(lastModified ? { lastModified } : {}),
      alternates: {
        languages: Object.fromEntries(Object.entries(languages).map(([lang, path]) => [lang, `${site.url}${path}`])),
      },
    }));
  };

  return [
    ...entries(inEveryLocale(homePath)),
    ...articles.flatMap((article) =>
      entries(inEveryLocale((locale) => articlePath(locale, article.slug)), article.published),
    ),
    ...entries(privacyPath),
  ];
}
