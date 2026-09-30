import { Fragment } from 'react';
import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { ContactLink } from '@/components/ui/ContactLink';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Rich } from '@/components/ui/Rich';
import type { ReferencesContent } from '@/content/references';
import type { Locale } from '@/content/types';
import { resolveHref } from '@/lib/links';
import styles from './References.module.css';

interface ReferencesProps {
  content: ReferencesContent;
  locale: Locale;
}

/**
 * Client feedback. A quotation is shown verbatim only in the language it was
 * written in; other languages show a clearly worded summary (see content/references.ts).
 */
export function References({ content, locale }: ReferencesProps) {
  return (
    <section className={`section wrap ${styles.referenceSection}`} id="referenssit" aria-labelledby="reference-title">
      <p className="eyebrow">{content.eyebrow[locale]}</p>
      <h2 id="reference-title" className="visually-hidden">
        {content.hiddenTitle[locale]}
      </h2>
      {content.items.map((item, index) => {
        const summary = item.quote.summary[locale];
        return (
          <div key={item.credit.name} className={index === 0 ? styles.referenceGrid : `${styles.referenceGrid} ${styles.secondaryReference}`}>
            <div className={styles.clientLabel}>
              {item.clientLabel.title[locale]}
              <span>
                <Rich text={item.clientLabel.description[locale]} />
              </span>
            </div>
            <div>
              {item.recommendationLabel ? (
                <p className={`eyebrow ${styles.personalRecommendation}`}>{item.recommendationLabel[locale]}</p>
              ) : null}
              {summary ? (
                <p className={styles.testimonialSummary} lang={locale}>
                  {summary}
                </p>
              ) : (
                <blockquote className={styles.quote} lang={item.quote.original.lang}>
                  {item.quote.original.text}
                </blockquote>
              )}
              <p className={styles.quoteCredit}>
                {item.credit.name} <span>{item.credit.role[locale]}</span>
              </p>
              <p className={styles.referenceText}>{item.text[locale]}</p>
              {item.link ? (
                <ExternalLink className="text-link" href={resolveHref(item.link.href, locale)} locale={locale}>
                  <ArrowLabel>{item.link.label[locale]}</ArrowLabel>
                </ExternalLink>
              ) : null}
              {item.story ? (
                <details className={styles.caseStory} id={item.story.id}>
                  <summary>
                    <ArrowLabel symbol="+">{item.story.summary[locale]}</ArrowLabel>
                  </summary>
                  <div className={styles.caseBody}>
                    {/* Flat siblings on purpose: the stylesheet spaces headings with "p + h3". */}
                    {item.story.sections.map((section) => (
                      <Fragment key={section.heading.fi}>
                        <h3>{section.heading[locale]}</h3>
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph.fi}>{paragraph[locale]}</p>
                        ))}
                      </Fragment>
                    ))}
                    <ContactLink cta={item.story.cta} locale={locale} className="text-link" arrow="inline" />
                  </div>
                </details>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
}
