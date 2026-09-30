import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticlePage } from '@/components/pages/ArticlePage';
import { articleMetadata, articleSlugs, findArticle } from '@/lib/articles';

type Props = { params: Promise<{ slug: string }> };

// Only the listed articles exist; every other address is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = findArticle((await params).slug);
  return article ? articleMetadata('es', article) : {};
}

export default async function Page({ params }: Props) {
  const article = findArticle((await params).slug);
  if (!article) notFound();
  return <ArticlePage article={article} locale="es" />;
}
