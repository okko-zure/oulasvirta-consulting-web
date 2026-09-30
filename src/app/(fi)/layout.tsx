import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
