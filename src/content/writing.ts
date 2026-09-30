// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { Localized } from './types';

export interface WritingContent {
  title: Localized;
  /** Interview published by a third party (opens in a new tab). */
  featured: { href: string; meta: Localized; title: Localized };
  /** Own archived articles; `slug` refers to an entry in articles.ts. */
  articles: { slug: string; date: string; title: Localized }[];
}

// NOTE: In English and Spanish the list labels of the two archived articles
// still end with "(in Finnish)", although translated article pages exist. The
// wording is preserved from the prototype; see docs/MIGRATION_REPORT.md.
export const writing: WritingContent = {
  title: {
    fi: "Kirjoituksia",
    en: "Articles",
    es: "Artículos",
  },
  featured: {
    href: "https://www.kauppalehti.fi/kumppanisisallot/netvisor-kyc/rahanpesulainsaadato-uudistuu-ilmoitusvelvollisten-kannattaa-valmistautua-muutoksiin-nyt/",
    meta: {
      fi: "23.9.2026 · Haastattelu Kauppalehdessä",
      en: "23 September 2026 · Interview in Kauppalehti (in Finnish)",
      es: "23 de septiembre de 2026 · Entrevista en Kauppalehti (en finés)",
    },
    title: {
      fi: "Rahanpesulainsäädäntö uudistuu – ilmoitusvelvollisten kannattaa valmistautua muutoksiin nyt",
      en: "AML legislation is changing – obliged entities should prepare now",
      es: "La normativa contra el blanqueo cambia: los sujetos obligados deben prepararse ahora",
    },
  },
  articles: [
    {
      slug: "tiedatko-kuka-yritykseesi-investoi",
      date: "11.9.2024",
      title: {
        fi: "Tiedätkö, kuka yritykseesi investoi?",
        en: "Do you know who is investing in your business? (in Finnish)",
        es: "¿Sabes quién invierte en tu empresa? (en finés)",
      },
    },
    {
      slug: "rahanpesun-estaminen",
      date: "14.8.2024",
      title: {
        fi: "Rahanpesun estäminen",
        en: "Preventing money laundering (in Finnish)",
        es: "Prevención del blanqueo de capitales (en finés)",
      },
    },
  ],
};
