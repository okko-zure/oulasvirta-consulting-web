import { PageFrame } from '@/components/layout/PageFrame';
import { SmartLink } from '@/components/ui/SmartLink';
import { site } from '@/content/site';
import { locales, type Locale } from '@/content/types';
import { ui } from '@/content/ui';
import { homePath, inEveryLocale } from '@/lib/routes';
import styles from './NotFound.module.css';
import { PageHeading } from './PageHeading';

interface NotFoundPageProps {
  locale: Locale;
  /**
   * The root 404 page (unknown address, so no language is known) also shows a
   * short note in the other languages, each marked with its own `lang`.
   */
  showOtherLanguages?: boolean;
}

/** The "page not found" page. Its wording is never indexed: Next.js adds noindex to every 404. */
export function NotFoundPage({ locale, showOtherLanguages = false }: NotFoundPageProps) {
  return (
    <PageFrame locale={locale} paths={inEveryLocale(homePath)}>
      <div className={`wrap ${styles.notFound}`}>
        <PageHeading backHref={homePath(locale)} backLabel={ui.notFound.home[locale]} eyebrow="404" title={ui.notFound.title[locale]} />
        <p className={styles.text}>{ui.notFound.text[locale]}</p>
        {showOtherLanguages
          ? locales
              .filter((other) => other !== locale)
              .map((other) => (
                <section key={other} lang={other} className={styles.otherLanguage} aria-label={`${site.name} (${other.toUpperCase()})`}>
                  <h2>{ui.notFound.title[other]}</h2>
                  <p>{ui.notFound.text[other]}</p>
                  <SmartLink className="text-link" href={homePath(other)}>
                    {ui.notFound.home[other]}
                  </SmartLink>
                </section>
              ))
          : null}
      </div>
    </PageFrame>
  );
}
