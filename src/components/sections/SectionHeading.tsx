import type { Locale, SectionHeadingContent } from '@/content/types';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  content: SectionHeadingContent;
  locale: Locale;
  /** "dark" for sections with a dark background. */
  tone?: 'light' | 'dark';
}

/** The numbered label and short note above a section. */
export function SectionHeading({ content, locale, tone = 'light' }: SectionHeadingProps) {
  return (
    <div className={tone === 'dark' ? `${styles.sectionHeading} ${styles.dark}` : styles.sectionHeading}>
      <p className="eyebrow">{content.eyebrow[locale]}</p>
      <p className={styles.sectionNote}>{content.note[locale]}</p>
    </div>
  );
}
