// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { Localized } from './types';

export interface FooterContent {
  entity: Localized;
  privacyLabel: Localized;
  backToTop: Localized;
  copyright: string;
  tagline: Localized;
}

export const footer: FooterContent = {
  entity: {
    fi: "Oulasvirta Consulting on SK-Monitoimialat Oy:n aputoiminimi.\nY-tunnus 3019497-7",
    en: "Oulasvirta Consulting is a registered auxiliary business name of SK-Monitoimialat Oy.\nFinnish Business ID 3019497-7",
    es: "Oulasvirta Consulting es un nombre comercial auxiliar registrado de SK-Monitoimialat Oy.\nIdentificación empresarial finlandesa 3019497-7",
  },
  privacyLabel: {
    fi: "Tietosuoja",
    en: "Privacy",
    es: "Privacidad",
  },
  backToTop: {
    fi: "Takaisin alkuun",
    en: "Back to top",
    es: "Volver al inicio",
  },
  copyright: "© 2026 Oulasvirta Consulting",
  tagline: {
    fi: "AML · Pakotteet · Compliance",
    en: "AML · Sanctions · Compliance",
    es: "Prevención del blanqueo · Sanciones · Cumplimiento",
  },
};
