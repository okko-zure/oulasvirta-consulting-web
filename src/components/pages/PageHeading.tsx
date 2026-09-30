import type { ReactNode } from 'react';
import { SmartLink } from '@/components/ui/SmartLink';
import styles from './PageHeading.module.css';

interface PageHeadingProps {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  /** Line under the title, for example author and date. */
  meta?: ReactNode;
}

/** "Back" link and the heading block shared by the article, privacy and not-found pages. */
export function PageHeading({ backHref, backLabel, eyebrow, title, meta }: PageHeadingProps) {
  return (
    <>
      <SmartLink className={`text-link ${styles.articleBack}`} href={backHref}>
        <span>
          <span aria-hidden="true">←</span> {backLabel}
        </span>
      </SmartLink>
      <header className={styles.articleHeading}>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {meta ? <p className={styles.articleMeta}>{meta}</p> : null}
      </header>
    </>
  );
}
