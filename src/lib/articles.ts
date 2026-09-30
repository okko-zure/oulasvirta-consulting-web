import type { Metadata } from 'next';
import type { Article } from '@/content/articles';
import { articles } from '@/content/articles';
import type { Locale } from '@/content/types';
import { pageMetadata } from '@/lib/metadata';
import { articlePath, inEveryLocale } from '@/lib/routes';

export function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Every article exists in every language, so the routes of all languages use the same list of slugs. */
export function articleSlugs(): { slug: string }[] {
  return articles.map(({ slug }) => ({ slug }));
}

export function articleMetadata(locale: Locale, article: Article): Metadata {
  return pageMetadata({
    locale,
    paths: inEveryLocale((other) => articlePath(other, article.slug)),
    title: article.title[locale],
    description: article.description[locale],
    article: { published: article.published },
  });
}
