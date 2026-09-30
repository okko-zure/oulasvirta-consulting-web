// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { StaticImageData } from 'next/image';
import portrait from '@/assets/images/katja.jpg';
import type { ContactCta, Localized } from './types';

export interface HeroContent {
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  cta: ContactCta;
  /** The "20+ years" proof point. */
  proof: { value: string; label: Localized; detail: Localized };
  portrait: { image: StaticImageData; alt: Localized; name: string; tagline: Localized };
}

export const hero: HeroContent = {
  eyebrow: {
    fi: "AML / PAKOTTEET / COMPLIANCE",
    en: "AML / SANCTIONS / COMPLIANCE",
    es: "PREVENCIÓN DEL BLANQUEO / SANCIONES / CUMPLIMIENTO",
  },
  title: {
    fi: "Vaativa sääntely.\n*Toimivat ratkaisut.*",
    en: "Complex rules.\n*Solutions that work.*",
    es: "Normativa compleja.\n*Soluciones que funcionan.*",
  },
  description: {
    fi: "Autan yrityksiä rahanpesun estämisessä, pakotteiden noudattamisessa ja compliance-toiminnan kehittämisessä. Muutan vaatimukset yrityksenne arjessa toimiviksi ratkaisuiksi.",
    en: "I help businesses prevent money laundering, comply with sanctions and develop their compliance functions. I turn regulatory requirements into solutions that work in your day-to-day operations.",
    es: "Ayudo a las empresas a prevenir el blanqueo de capitales, cumplir las sanciones y desarrollar su función de cumplimiento. Convierto los requisitos normativos en soluciones que funcionan en la actividad diaria de su empresa.",
  },
  cta: {
    label: {
      fi: "Keskustellaan yrityksenne tarpeista",
      en: "Let's discuss your business needs",
      es: "Hablemos de las necesidades de su empresa",
    },
    topic: "question",
  },
  proof: {
    value: "20+",
    label: {
      fi: "vuoden kokemus",
      en: "years of experience",
      es: "años de experiencia",
    },
    detail: {
      fi: "Finanssiala, teollisuus ja EU-toimielimet",
      en: "Financial services, industry and EU institutions",
      es: "Sector financiero, industria e instituciones de la UE",
    },
  },
  portrait: {
    image: portrait,
    alt: {
      fi: "Katja Oulasvirta vaaleansinisessä jakussa",
      en: "Katja Oulasvirta wearing a light blue jacket",
      es: "Katja Oulasvirta con una chaqueta azul claro",
    },
    name: "Katja Oulasvirta",
    tagline: {
      fi: "Juristi. Asiantuntija. Kumppaninne.",
      en: "Legal adviser. Specialist. Your partner.",
      es: "Jurista. Especialista. Su colaboradora.",
    },
  },
};
