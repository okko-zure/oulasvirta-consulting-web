import Image from 'next/image';
import { ContactLink } from '@/components/ui/ContactLink';
import { Rich } from '@/components/ui/Rich';
import type { HeroContent } from '@/content/hero';
import type { Locale } from '@/content/types';
import styles from './Hero.module.css';

interface HeroProps {
  content: HeroContent;
  locale: Locale;
}

export function Hero({ content, locale }: HeroProps) {
  return (
    <section className={styles.hero} id="alku" aria-labelledby="hero-title">
      <div className={`wrap ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">{content.eyebrow[locale]}</p>
          <h1 id="hero-title">
            <Rich text={content.title[locale]} />
          </h1>
          <p className={styles.heroDescription}>{content.description[locale]}</p>
          <ContactLink cta={content.cta} locale={locale} className="button button-gold" />
          <div className={styles.heroProof}>
            <span className={styles.proofNumber}>{content.proof.value}</span>
            <p>
              {content.proof.label[locale]}
              <br />
              <span>{content.proof.detail[locale]}</span>
            </p>
          </div>
        </div>
        <figure className={styles.heroPortrait}>
          {/* The largest image above the fold: preloaded, and it fills the figure (the crop is set in the stylesheet). */}
          <Image
            src={content.portrait.image}
            alt={content.portrait.alt[locale]}
            fill
            preload
            sizes="(max-width: 600px) min(100vw, 460px), (max-width: 1100px) 47vw, (max-width: 1350px) 42vw, 570px"
          />
          <figcaption>
            <span>{content.portrait.name}</span>
            <small>{content.portrait.tagline[locale]}</small>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
