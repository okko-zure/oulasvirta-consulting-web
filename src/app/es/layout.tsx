import type { ReactNode } from 'react';
import { RootDocument } from '@/components/layout/RootDocument';

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
