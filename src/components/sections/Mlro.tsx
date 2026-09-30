import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { ContactLink } from '@/components/ui/ContactLink';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Rich } from '@/components/ui/Rich';
import type { MlroContent } from '@/content/mlro';
import type { Locale } from '@/content/types';
import { resolveHref } from '@/lib/links';
import styles from './Mlro.module.css';
import { SectionHeading } from './SectionHeading';

interface MlroProps {
  content: MlroContent;
  locale: Locale;
}

/** "Your own expert": the two engagement models (1 or 2 days a week) and how the cooperation works. */
export function Mlro({ content, locale }: MlroProps) {
  const { roleDetail } = content;
  return (
    <section className={styles.mlroSection} id="mlro" aria-labelledby="mlro-title">
      <div className="wrap section">
        <SectionHeading content={content.heading} locale={locale} tone="dark" />
        <div className={styles.mlroIntro}>
          <h2 id="mlro-title">
            <Rich text={content.title[locale]} />
          </h2>
          <div>
            <p className="lead">{content.lead[locale]}</p>
            <p>{content.text[locale]}</p>
            <p className={styles.mlroDefinition}>{content.definition[locale]}</p>
          </div>
        </div>
        <div className={styles.plans}>
          {content.plans.map((plan) => (
            <article key={plan.eyebrow.fi} className={plan.accent ? `${styles.plan} ${styles.planAccent}` : styles.plan}>
              <div className={styles.planTop}>
                <span className="eyebrow">{plan.eyebrow[locale]}</span>
                <span className={styles.planTime}>
                  {plan.time.amount} <small>{plan.time.unit[locale]}</small>
                </span>
              </div>
              <h3>{plan.title[locale]}</h3>
              <p>{plan.text[locale]}</p>
              <ul>
                {plan.points.map((point) => (
                  <li key={point.fi}>{point[locale]}</li>
                ))}
              </ul>
              <ContactLink cta={plan.cta} locale={locale} className="text-link" />
            </article>
          ))}
        </div>
        <div className={styles.engagement}>
          {content.engagement.map((item) => (
            <div key={item.title.fi}>
              <h3>{item.title[locale]}</h3>
              <p>{item.text[locale]}</p>
            </div>
          ))}
        </div>
        <details className={styles.roleDetail}>
          <summary>{roleDetail.summary[locale]}</summary>
          {roleDetail.paragraphs.map((paragraph) => (
            <p key={paragraph.fi}>{paragraph[locale]}</p>
          ))}
          <p>
            <ExternalLink href={resolveHref(roleDetail.link.href, locale)} locale={locale}>
              <ArrowLabel>{roleDetail.link.label[locale]}</ArrowLabel>
            </ExternalLink>
          </p>
        </details>
      </div>
    </section>
  );
}
