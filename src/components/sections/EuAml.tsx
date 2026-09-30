import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { ContactLink } from '@/components/ui/ContactLink';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Rich } from '@/components/ui/Rich';
import type { EuAmlContent } from '@/content/eu-aml';
import type { Locale } from '@/content/types';
import { resolveHref } from '@/lib/links';
import styles from './EuAml.module.css';
import { SectionHeading } from './SectionHeading';

interface EuAmlProps {
  content: EuAmlContent;
  locale: Locale;
}

/** The EU AML reform: what is coming, the three steps, and the expandable list of instruments. */
export function EuAml({ content, locale }: EuAmlProps) {
  const { datePanel, sources } = content;
  return (
    <section className="section wrap" id="eu-aml" aria-labelledby="aml-title">
      <SectionHeading content={content.heading} locale={locale} />
      <div className={styles.amlIntro}>
        <div>
          <h2 id="aml-title">
            <Rich text={content.title[locale]} />
          </h2>
          <p className="lead">{content.lead[locale]}</p>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.fi}>{paragraph[locale]}</p>
          ))}
          <div className={styles.amlExperience}>
            <p className="eyebrow">{content.experience.eyebrow[locale]}</p>
            <p>{content.experience.text[locale]}</p>
          </div>
        </div>
        <aside className={styles.datePanel}>
          <span className="eyebrow">{datePanel.eyebrow[locale]}</span>
          <strong>
            {datePanel.day}
            <br />
            <span>{datePanel.year}</span>
          </strong>
          <p>
            <Rich text={datePanel.points[locale]} />
          </p>
        </aside>
      </div>
      <div className={styles.steps}>
        {content.steps.map((step) => (
          <article key={step.number}>
            <span className={styles.stepNumber}>{step.number}</span>
            <h3>{step.title[locale]}</h3>
            <p>{step.text[locale]}</p>
            <p className={styles.deliverable}>{step.deliverable[locale]}</p>
          </article>
        ))}
      </div>
      <div className={styles.sectionBottom}>
        <ContactLink cta={content.cta} locale={locale} className="button button-dark" />
        <details className={styles.sourceDetail}>
          <summary>{sources.summary[locale]}</summary>
          <p className={styles.legalIntro}>{sources.intro[locale]}</p>
          <dl className={styles.regulationGrid}>
            {sources.items.map((item) => (
              <div key={item.term.fi} className={item.wide ? styles.regulationWide : undefined}>
                <dt>{item.term[locale]}</dt>
                <dd>
                  <span className={styles.regulationId} lang={item.idLang?.[locale]}>
                    {item.id[locale]}
                  </span>
                  <p>{item.text[locale]}</p>
                  {item.link ? (
                    <ExternalLink href={resolveHref(item.link.href, locale)} locale={locale}>
                      <ArrowLabel>{item.link.label[locale]}</ArrowLabel>
                    </ExternalLink>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </details>
      </div>
    </section>
  );
}
