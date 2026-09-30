import Image from 'next/image';
import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { ContactLink } from '@/components/ui/ContactLink';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Rich } from '@/components/ui/Rich';
import type { TrainingContent } from '@/content/training';
import type { Locale } from '@/content/types';
import { resolveHref } from '@/lib/links';
import { SectionHeading } from './SectionHeading';
import styles from './Training.module.css';

interface TrainingProps {
  content: TrainingContent;
  locale: Locale;
}

/** Only some photographs need their own crop (see Training.module.css). */
const cardVariant: Record<TrainingContent['cards'][number]['id'], string | undefined> = {
  kesapaivat: styles.trainingCardKesapaivat,
  rahanpesupaiva: styles.trainingCardRahanpesupaiva,
  isannointiliitto: undefined,
  juristiliitto: styles.trainingCardJuristiliitto,
};

/** Speaking engagements and training: photo cards, text-only events and a call to action. */
export function Training({ content, locale }: TrainingProps) {
  return (
    <section className={styles.trainingSection} id="koulutukset" aria-labelledby="training-title">
      <div className="wrap section">
        <SectionHeading content={content.heading} locale={locale} />
        <div className={styles.trainingIntro}>
          <h2 id="training-title">
            <Rich text={content.title[locale]} />
          </h2>
          <div>
            <p className="lead">{content.lead[locale]}</p>
            <p>{content.text[locale]}</p>
          </div>
        </div>
        <div className={styles.trainingGallery}>
          {content.cards.map((card) => (
            <article key={card.id} className={[styles.trainingCard, cardVariant[card.id]].filter(Boolean).join(' ')}>
              <figure>
                <Image
                  src={card.image}
                  alt={card.imageAlt[locale]}
                  sizes="(max-width: 600px) 100vw, (max-width: 1300px) 46vw, 612px"
                />
                <figcaption>{card.caption[locale]}</figcaption>
              </figure>
              <div className={styles.trainingCardCopy}>
                <h3>{card.title[locale]}</h3>
                <p>{card.text[locale]}</p>
                <ExternalLink className="text-link" href={resolveHref(card.link.href, locale)} locale={locale}>
                  <ArrowLabel arrow="inline">{card.link.label[locale]}</ArrowLabel>
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.trainingEvents}>
          {content.events.map((event) => (
            <article key={event.title.fi}>
              <span className="eyebrow">{event.eyebrow[locale]}</span>
              <h3>{event.title[locale]}</h3>
              <p>{event.text[locale]}</p>
              <ExternalLink className="text-link" href={resolveHref(event.link.href, locale)} locale={locale}>
                <ArrowLabel arrow="inline">{event.link.label[locale]}</ArrowLabel>
              </ExternalLink>
            </article>
          ))}
        </div>
        <div className={styles.trainingCta}>
          <p>{content.cta.text[locale]}</p>
          <ContactLink cta={content.cta.button} locale={locale} className="button button-dark" />
        </div>
      </div>
    </section>
  );
}
