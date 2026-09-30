// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { Localized } from './types';

export interface FocusBandContent {
  /** Two teaser links to sections further down the page. */
  items: { href: string; eyebrow: Localized; title: Localized; cta: Localized }[];
}

export const focusBand: FocusBandContent = {
  items: [
    {
      href: "#eu-aml",
      eyebrow: {
        fi: "EU:N AML-UUDISTUS",
        en: "THE EU AML REFORM",
        es: "REFORMA EUROPEA CONTRA EL BLANQUEO",
      },
      title: {
        fi: "Vuosi 2027 lähestyy.\nMuutos alkaa nykytilasta.",
        en: "2027 is approaching.\nStart with where you stand.",
        es: "2027 se acerca.\nConozca su punto de partida.",
      },
      cta: {
        fi: "Valmistaudu uudistukseen",
        en: "Prepare for the reform",
        es: "Prepárate para la reforma",
      },
    },
    {
      href: "#mlro",
      eyebrow: {
        fi: "OMA ASIANTUNTIJA YRITYKSENNE ARKEEN",
        en: "AN EXPERT FOR YOUR DAY-TO-DAY BUSINESS",
        es: "UN ESPECIALISTA PARA EL DÍA A DÍA DE SU EMPRESA",
      },
      title: {
        fi: "Kokenut vastuunkantaja.\n1–2 päivää viikossa.",
        en: "Experienced leadership.\n1–2 days a week.",
        es: "Experiencia y responsabilidad.\n1–2 días a la semana.",
      },
      cta: {
        fi: "Tutustu palvelumalliin",
        en: "Explore the service",
        es: "Conoce el servicio",
      },
    },
  ],
};
