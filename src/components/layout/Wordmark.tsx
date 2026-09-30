import { SmartLink } from '@/components/ui/SmartLink';
import { site } from '@/content/site';
import styles from './Wordmark.module.css';

interface WordmarkProps {
  href: string;
  /** Accessible name of the link (the visible text alone reads as "OulasvirtaCONSULTING"). */
  label: string;
  variant?: 'header' | 'footer';
}

/** The text logo. It links to the top of the home page. */
export function Wordmark({ href, label, variant = 'header' }: WordmarkProps) {
  const className = variant === 'footer' ? `${styles.wordmark} ${styles.footer}` : styles.wordmark;
  return (
    <SmartLink className={className} href={href} aria-label={label}>
      <span>{site.wordmark.primary}</span>
      <small>{site.wordmark.secondary}</small>
    </SmartLink>
  );
}
