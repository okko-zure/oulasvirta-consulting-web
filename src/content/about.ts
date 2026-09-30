// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, Localized } from './types';

export interface AboutContent {
  eyebrow: Localized;
  title: Localized;
  lead: Localized;
  paragraphs: Localized[];
  cta: ContactCta;
  /** Boxed statement next to the biography. `name` and `organisation` are not translated. */
  panel: { eyebrow: Localized; text: Localized; name: string; organisation: string };
}

export const about: AboutContent = {
  eyebrow: {
    fi: "04 / KATJA OULASVIRTA",
    en: "04 / KATJA OULASVIRTA",
    es: "04 / KATJA OULASVIRTA",
  },
  title: {
    fi: "Juridiikkaa, joka toimii\n*myös käytännössä.*",
    en: "Legal expertise that works\n*in practice.*",
    es: "Asesoramiento jurídico\n*que funciona en la práctica.*",
  },
  lead: {
    fi: "Yhdistän juridisen tulkinnan, riskienhallinnan ja kokemuksen vaativista johtotehtävistä.",
    en: "I combine legal interpretation, risk management and experience in demanding leadership roles.",
    es: "Combino interpretación jurídica, gestión de riesgos y experiencia en puestos de dirección exigentes.",
  },
  paragraphs: [
    {
      fi: "Minulla on yli 20 vuoden kokemus finanssialalta, teknologiateollisuudesta, puolustushallinnosta ja EU:n toimielimistä. Olen työskennellyt muun muassa Nordean johtotehtävissä rahanpesun estämisen parissa.",
      en: "I have more than 20 years of experience across financial services, technology, defence administration and EU institutions. My background includes leadership roles at Nordea working on financial crime prevention.",
      es: "Cuento con más de 20 años de experiencia en el sector financiero, la industria tecnológica, la administración de defensa y las instituciones de la UE. He desempeñado, entre otros, puestos de dirección en Nordea en el ámbito de la prevención del blanqueo.",
    },
    {
      fi: "Juristin koulutukseni Suomesta ja Englannista sekä ICA:n AML-asiantuntijasertifikaatti tukevat työtäni. Autan johtoa ja asiantuntijoita hahmottamaan, mitä sääntely käytännössä edellyttää ja miten muutokset kannattaa toteuttaa.",
      en: "My legal education in Finland and England and my ICA qualification in anti-money laundering underpin my work. I help management and specialists understand what regulation requires in practice and how to deliver the necessary changes.",
      es: "Mi formación jurídica en Finlandia e Inglaterra y mi certificación de la ICA en prevención del blanqueo respaldan mi trabajo. Ayudo a directivos y especialistas a comprender las exigencias normativas y a llevar a cabo los cambios necesarios.",
    },
  ],
  cta: {
    label: {
      fi: "Tutustutaan ja puhutaan yrityksenne tilanteesta",
      en: "Let's discuss your business’s situation",
      es: "Hablemos de la situación de su empresa",
    },
    topic: "question",
  },
  panel: {
    eyebrow: {
      fi: "OSAAMISENI YTIMESSÄ",
      en: "AT THE CORE OF MY WORK",
      es: "LA BASE DE MI TRABAJO",
    },
    text: {
      fi: "Juridinen tarkkuus.\nLiiketoiminnan ymmärrys.\nKäytännön toteutus.",
      en: "Legal precision.\nBusiness understanding.\nPractical implementation.",
      es: "Rigor jurídico.\nComprensión del negocio.\nAplicación práctica.",
    },
    name: "Katja Oulasvirta",
    organisation: "Oulasvirta Consulting",
  },
};
