import type { Article } from '@/content/articles';
import { homeMeta } from '@/content/home-meta';
import { site } from '@/content/site';
import type { Locale } from '@/content/types';
import { articlePath } from '@/lib/routes';

/**
 * schema.org structured data for search engines. It may only state facts that
 * are also visible on the website (name, legal entity, business ID, contact
 * details, the person behind the business). Do not add addresses, ratings,
 * qualifications or other claims that are not on the site.
 */
const organizationId = `${site.url}/#organization`;
const personId = `${site.url}/#person`;

export function homeStructuredData(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: site.name,
        legalName: site.legal.name,
        description: homeMeta.description[locale],
        url: `${site.url}/`,
        logo: `${site.url}/oulasvirta-consulting-logo.png`,
        email: site.email,
        telephone: site.phone.href.replace('tel:', ''),
        identifier: {
          '@type': 'PropertyValue',
          propertyID: 'Finnish Business ID (Y-tunnus)',
          value: site.legal.businessId,
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.person.name,
        sameAs: [site.person.linkedin],
        worksFor: { '@id': organizationId },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        inLanguage: locale,
        publisher: { '@id': organizationId },
      },
    ],
  };
}

export function articleStructuredData(article: Article, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[locale],
    description: article.description[locale],
    datePublished: article.published,
    inLanguage: locale,
    mainEntityOfPage: `${site.url}${articlePath(locale, article.slug)}`,
    author: { '@type': 'Person', name: site.person.name, sameAs: [site.person.linkedin] },
    publisher: { '@type': 'Organization', name: site.name, url: `${site.url}/` },
  };
}
