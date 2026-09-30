import { ContactLink } from '@/components/ui/ContactLink';
import { Rich } from '@/components/ui/Rich';
import type { SectorsContent } from '@/content/sectors';
import type { Locale } from '@/content/types';
import styles from './Sectors.module.css';

interface SectorsProps {
  content: SectorsContent;
  locale: Locale;
}

/** Sectors the consultancy serves, with the worked example for exporters. */
export function Sectors({ content, locale }: SectorsProps) {
  const { banks, exporters, accounting, propertyManagement, gambling, exportCase } = content;
  return (
    <section className={`wrap ${styles.sectorSection}`} id="toimialat" aria-labelledby="sector-title">
      <p className="eyebrow">{content.eyebrow[locale]}</p>
      <h2 id="sector-title">
        <Rich text={content.title[locale]} />
      </h2>
      <p className={styles.sectorLead}>{content.lead[locale]}</p>
      <div className={styles.sectorGrid}>
        <article className={styles.sectorPrimary}>
          <h3>{banks.title[locale]}</h3>
          <p>{banks.text[locale]}</p>
        </article>
        <article className={styles.sectorExport}>
          <div>
            <p className="eyebrow">{exporters.eyebrow[locale]}</p>
            <h3>{exporters.title[locale]}</h3>
            <p>{exporters.text[locale]}</p>
          </div>
          <div>
            <ul>
              {exporters.points.map((point) => (
                <li key={point.fi}>{point[locale]}</li>
              ))}
            </ul>
            <ContactLink cta={exporters.cta} locale={locale} className="text-link" arrow="inline" />
          </div>
        </article>
        {[accounting, propertyManagement, gambling].map((sector) => (
          <article key={sector.title.fi}>
            <h3>{sector.title[locale]}</h3>
            <p>{sector.text[locale]}</p>
          </article>
        ))}
      </div>
      <div className={styles.exportCase}>
        <p className="eyebrow">{exportCase.eyebrow[locale]}</p>
        <h3>{exportCase.title[locale]}</h3>
        {exportCase.paragraphs.map((paragraph) => (
          <p key={paragraph.fi}>{paragraph[locale]}</p>
        ))}
        <p className={styles.caseNote}>{exportCase.note[locale]}</p>
      </div>
      <ContactLink cta={content.cta} locale={locale} className={`text-link ${styles.sectorContact}`} />
    </section>
  );
}
