import Link from 'next/link';
import type { ComponentProps } from 'react';

/**
 * A link to somewhere on this website. Same-page anchors ("#palvelut") are
 * plain anchors; addresses to other pages use next/link (client-side
 * navigation and prefetching).
 */
export function SmartLink({ href, children, ...rest }: Omit<ComponentProps<'a'>, 'href'> & { href: string }) {
  if (href.startsWith('#')) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
