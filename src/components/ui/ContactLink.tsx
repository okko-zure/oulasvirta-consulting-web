import type { ContactCta, Locale } from '@/content/types';
import { ArrowLabel } from './ArrowLabel';

interface ContactLinkProps {
  cta: ContactCta;
  locale: Locale;
  /** Global style classes, e.g. "text-link" or "button button-gold". */
  className: string;
  arrow?: 'split' | 'inline';
}

/**
 * A call to action that jumps to the contact form. The contact form reads
 * `data-contact-topic` when the link is clicked and preselects that topic.
 */
export function ContactLink({ cta, locale, className, arrow = 'split' }: ContactLinkProps) {
  return (
    <a className={className} href="#yhteydenottolomake" data-contact-topic={cta.topic}>
      <ArrowLabel arrow={arrow}>{cta.label[locale]}</ArrowLabel>
    </a>
  );
}
