import { notFound } from 'next/navigation';

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: 'a' }];
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== 'a') notFound();
  return <main><h1>article {slug}</h1></main>;
}
