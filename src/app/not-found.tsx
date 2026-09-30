import type { Metadata } from 'next';
import { RootDocument } from '@/components/layout/RootDocument';
import { NotFoundPage } from '@/components/pages/NotFoundPage';
import { ui } from '@/content/ui';

export const metadata: Metadata = { title: ui.notFound.title.fi };

/**
 * 404 for every address that no page matches. The address does not tell us the
 * language, so this page is Finnish (the default language) with short notes in
 * English and Spanish. Pages that know their language have their own
 * not-found.tsx (see (fi), en and es). Next.js adds noindex to every 404.
 */
export default function NotFound() {
  return (
    <RootDocument locale="fi">
      <NotFoundPage locale="fi" showOtherLanguages />
    </RootDocument>
  );
}
