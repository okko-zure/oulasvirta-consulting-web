import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { Rich } from '@/components/ui/Rich';
import type { FocusBandContent } from '@/content/focus-band';
import type { Locale } from '@/content/types';
import styles from './FocusBand.module.css';

interface FocusBandProps {
  content: FocusBandContent;
  locale: Locale;
}

/** The two teaser links directly under the hero. */
export function FocusBand({ content, locale }: FocusBandProps) {
  return (
    <div className={styles.focusBand}>
      <div className={`wrap ${styles.focusGrid}`}>
        {content.items.map((item) => (
          <a key={item.href} href={item.href}>
            <span className="eyebrow">{item.eyebrow[locale]}</span>
            <strong>
              <Rich text={item.title[locale]} />
            </strong>
            <span className="text-link">
              <ArrowLabel>{item.cta[locale]}</ArrowLabel>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
