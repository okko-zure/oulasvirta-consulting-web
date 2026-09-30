import { ContactLink } from '@/components/ui/ContactLink';
import { Rich } from '@/components/ui/Rich';
import type { ServicesContent } from '@/content/services';
import type { Locale } from '@/content/types';
import { SectionHeading } from './SectionHeading';
import styles from './Services.module.css';

interface ServicesProps {
  content: ServicesContent;
  locale: Locale;
}

/** The four services as an expandable list (native <details>, no JavaScript). */
export function Services({ content, locale }: ServicesProps) {
  return (
    <section className="section wrap" id="palvelut" aria-labelledby="services-title">
      <SectionHeading content={content.heading} locale={locale} />
      <div className={styles.servicesLayout}>
        <div className={styles.servicesHeading}>
          <h2 id="services-title">
            <Rich text={content.title[locale]} />
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.fi}>{paragraph[locale]}</p>
          ))}
          <ContactLink cta={content.cta} locale={locale} className="text-link" />
        </div>
        <div className={styles.serviceList}>
          {content.items.map((item) => (
            <details key={item.number}>
              <summary>
                <span className={styles.serviceIndex}>{item.number}</span>
                <span>
                  <Rich text={item.title[locale]} />
                </span>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </summary>
              <div className={styles.serviceBody}>
                <p>{item.text[locale]}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point.fi}>{point[locale]}</li>
                  ))}
                </ul>
                <ContactLink cta={item.cta} locale={locale} className="text-link" arrow="inline" />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
