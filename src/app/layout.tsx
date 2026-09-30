import type { ReactNode } from 'react';

// Pass-through root layout: every language tree renders its own <html lang>.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
