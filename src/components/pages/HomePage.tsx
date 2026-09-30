import type { Metadata } from 'next';
import { PageFrame } from '@/components/layout/PageFrame';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { EuAml } from '@/components/sections/EuAml';
import { FocusBand } from '@/components/sections/FocusBand';
import { Hero } from '@/components/sections/Hero';
import { Mlro } from '@/components/sections/Mlro';
import { References } from '@/components/sections/References';
import { Sectors } from '@/components/sections/Sectors';
import { Services } from '@/components/sections/Services';
import { Training } from '@/components/sections/Training';
import { Writing } from '@/components/sections/Writing';
import { JsonLd } from '@/components/ui/JsonLd';
import { about } from '@/content/about';
import { contact } from '@/content/contact';
import { euAml } from '@/content/eu-aml';
import { focusBand } from '@/content/focus-band';
import { hero } from '@/content/hero';
import { homeMeta } from '@/content/home-meta';
import { mlro } from '@/content/mlro';
import { references } from '@/content/references';
import { sectors } from '@/content/sectors';
import { services } from '@/content/services';
import { training } from '@/content/training';
import type { Locale } from '@/content/types';
import { writing } from '@/content/writing';
import { pageMetadata } from '@/lib/metadata';
import { homePath, inEveryLocale } from '@/lib/routes';
import { homeStructuredData } from '@/lib/structured-data';

/** Title, description, canonical URL, hreflang and social sharing data of the home page. */
export function homeMetadata(locale: Locale): Metadata {
  return pageMetadata({
    locale,
    paths: inEveryLocale(homePath),
    title: homeMeta.title[locale],
    description: homeMeta.description[locale],
    absoluteTitle: true,
  });
}

/** The whole one-page website, in one language. The order of the sections is the order on the page. */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageFrame locale={locale} paths={inEveryLocale(homePath)} home>
        <Hero content={hero} locale={locale} />
        <FocusBand content={focusBand} locale={locale} />
        <Sectors content={sectors} locale={locale} />
        <EuAml content={euAml} locale={locale} />
        <Mlro content={mlro} locale={locale} />
        <Services content={services} locale={locale} />
        <Training content={training} locale={locale} />
        <About content={about} locale={locale} />
        <References content={references} locale={locale} />
        <Writing content={writing} locale={locale} />
        <Contact content={contact} locale={locale} />
      </PageFrame>
      <JsonLd data={homeStructuredData(locale)} />
    </>
  );
}
