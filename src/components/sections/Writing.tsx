import { ExternalLink } from '@/components/ui/ExternalLink';
import { SmartLink } from '@/components/ui/SmartLink';
import type { WritingContent } from '@/content/writing';
import type { Locale } from '@/content/types';
import { articlePath } from '@/lib/routes';
import styles from './Writing.module.css';

interface WritingProps {
  content: WritingContent;
  locale: Locale;
}

/** One interview on another website, and the archived articles that have their own pages. */
export function Writing({ content, locale }: WritingProps) {
  const { featured } = content;
  return (
    <section className={styles.writingSection} id="kirjoituksia" aria-labelledby="writing-title">
      <div className={`wrap ${styles.writingInner}`}>
        <h2 id="writing-title">{content.title[locale]}</h2>
        <div>
          <ExternalLink className={styles.featuredWriting} href={featured.href} locale={locale}>
            <span>
              <small>{featured.meta[locale]}</small>
              <strong>{featured.title[locale]}</strong>
            </span>
            <span aria-hidden="true">↗</span>
          </ExternalLink>
          {content.articles.map((article) => (
            <SmartLink key={article.slug} href={articlePath(locale, article.slug)}>
              <span>
                <small>{article.date}</small>
                {article.title[locale]}
              </span>
              <span aria-hidden="true">↗</span>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
