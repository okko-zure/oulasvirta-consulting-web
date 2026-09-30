import { ContactLink } from '@/components/ui/ContactLink';
import { Rich } from '@/components/ui/Rich';
import type { AboutContent } from '@/content/about';
import type { Locale } from '@/content/types';
import styles from './About.module.css';

interface AboutProps {
  content: AboutContent;
  locale: Locale;
}

/** Short biography with a boxed statement of what the expertise rests on. */
export function About({ content, locale }: AboutProps) {
  const { panel } = content;
  return (
    <section className={styles.aboutSection} id="katja" aria-labelledby="about-title">
      <div className={`wrap section ${styles.aboutGrid}`}>
        <div>
          <p className="eyebrow">{content.eyebrow[locale]}</p>
          <h2 id="about-title">
            <Rich text={content.title[locale]} />
          </h2>
          <p className="lead">{content.lead[locale]}</p>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.fi}>{paragraph[locale]}</p>
          ))}
          <ContactLink cta={content.cta} locale={locale} className="text-link" />
        </div>
        <aside className={styles.expertisePanel}>
          <span className="eyebrow">{panel.eyebrow[locale]}</span>
          <p>
            <Rich text={panel.text[locale]} />
          </p>
          <div className={styles.expertiseBottom}>
            <strong>{panel.name}</strong>
            <span>{panel.organisation}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
