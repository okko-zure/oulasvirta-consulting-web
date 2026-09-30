import { PageFrame } from '@/components/layout/PageFrame';
import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { JsonLd } from '@/components/ui/JsonLd';
import { SmartLink } from '@/components/ui/SmartLink';
import { articleUi, type Article } from '@/content/articles';
import { site } from '@/content/site';
import type { Locale } from '@/content/types';
import { articlePath, homePath, inEveryLocale } from '@/lib/routes';
import { articleStructuredData } from '@/lib/structured-data';
import styles from './Article.module.css';
import { PageHeading } from './PageHeading';

interface ArticlePageProps {
  article: Article;
  locale: Locale;
}

/** One archived article, in the language of the page. */
export function ArticlePage({ article, locale }: ArticlePageProps) {
  const home = homePath(locale);
  return (
    <>
      <PageFrame locale={locale} paths={inEveryLocale((other) => articlePath(other, article.slug))}>
        <article className={`wrap ${styles.articleLayout}`}>
          <PageHeading
            backHref={`${home}#kirjoituksia`}
            backLabel={articleUi.back[locale]}
            eyebrow={articleUi.archive[locale]}
            title={article.title[locale]}
            meta={
              <>
                {site.person.name} · {articleUi.published[locale]}{' '}
                <time dateTime={article.published}>{article.dateLabel[locale]}</time>
              </>
            }
          />
          <p className={styles.articleArchiveNote}>{articleUi.note[locale]}</p>
          <div className={styles.articleBody}>
            {article.blocks.map((block, index) => {
              switch (block.type) {
                case 'p':
                  return <p key={index}>{block.text[locale]}</p>;
                case 'h2':
                  return <h2 key={index}>{block.text[locale]}</h2>;
                case 'ul':
                  return (
                    <ul key={index}>
                      {block.items.map((item) => (
                        <li key={item.fi}>{item[locale]}</li>
                      ))}
                    </ul>
                  );
                case 'link':
                  return (
                    <p key={index}>
                      <ExternalLink href={block.href} locale={locale}>
                        <ArrowLabel>{block.text[locale]}</ArrowLabel>
                      </ExternalLink>
                    </p>
                  );
              }
            })}
          </div>
          <div className={styles.articleContact}>
            <SmartLink className="button button-dark" href={`${home}#yhteydenottolomake`}>
              <ArrowLabel>{articleUi.contact[locale]}</ArrowLabel>
            </SmartLink>
          </div>
        </article>
      </PageFrame>
      <JsonLd data={articleStructuredData(article, locale)} />
    </>
  );
}
