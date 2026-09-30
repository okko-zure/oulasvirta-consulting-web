import type { ReactNode } from 'react';
import { RootDocument } from '@/components/layout/RootDocument';

// Finnish is the default language and lives at the root of the site.
export default function FinnishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="fi">{children}</RootDocument>;
}
