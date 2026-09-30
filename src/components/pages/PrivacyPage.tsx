import { PageFrame } from '@/components/layout/PageFrame';
import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { privacy } from '@/content/privacy';
import { site } from '@/content/site';
import type { Locale } from '@/content/types';
import { pageMetadata } from '@/lib/metadata';
import { homePath, privacyPath } from '@/lib/routes';
import type { Metadata } from 'next';
import { PageHeading } from './PageHeading';
import styles from './Privacy.module.css';

export function privacyMetadata(locale: Locale): Metadata {
  return pageMetadata({
    locale,
    paths: privacyPath,
    title: privacy.title[locale],
    description: privacy.description[locale],
  });
}

/** The privacy notice, in the language of the page. */
export function PrivacyPage({ locale }: { locale: Locale }) {
  return (
    <PageFrame locale={locale} paths={privacyPath}>
      <article className={`wrap ${styles.privacyLayout}`}>
        <PageHeading
          backHref={homePath(locale)}
          backLabel={privacy.back[locale]}
          eyebrow={privacy.eyebrow[locale]}
          title={privacy.title[locale]}
          meta={`${site.name} · ${privacy.updated[locale]}`}
        />
        <div className={styles.privacyBody}>
          {privacy.sections.map((section) => (
            <section key={section.heading.fi} className={styles.privacySection}>
              <h2>{section.heading[locale]}</h2>
              {section.paragraphs[locale].map((paragraph, index) =>
                typeof paragraph === 'string' ? (
                  <p key={index}>{paragraph}</p>
                ) : (
                  <p key={index}>
                    <ExternalLink href={paragraph.link.href} locale={locale}>
                      <ArrowLabel>{paragraph.link.label}</ArrowLabel>
                    </ExternalLink>
                  </p>
                ),
              )}
            </section>
          ))}
        </div>
      </article>
    </PageFrame>
  );
}
