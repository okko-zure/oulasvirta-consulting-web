// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, Localized } from './types';

export interface NavigationContent {
  /** "Skip to content" link, the first focusable element of every page. */
  skipLink: Localized;
  /** Accessible name of the logo link. */
  homeLabel: Localized;
  /** Accessible name of the main navigation. */
  navLabel: Localized;
  /** Anchors on the home page, in display order. */
  items: { href: string; label: Localized }[];
  /** Highlighted last item that jumps to the contact form. */
  contact: ContactCta;
  /** Accessible name of the language switch. */
  languageLabel: Localized;
  /** Label of the mobile menu button. */
  menuLabel: Localized;
}

export const navigation: NavigationContent = {
  skipLink: {
    fi: "Siirry sisältöön",
    en: "Skip to content",
    es: "Saltar al contenido",
  },
  homeLabel: {
    fi: "Oulasvirta Consulting, etusivu",
    en: "Oulasvirta Consulting, home",
    es: "Oulasvirta Consulting, inicio",
  },
  navLabel: {
    fi: "Päänavigaatio",
    en: "Main navigation",
    es: "Navegación principal",
  },
  items: [
    {
      href: "#palvelut",
      label: {
        fi: "Palvelut",
        en: "Services",
        es: "Servicios",
      },
    },
    {
      href: "#eu-aml",
      label: {
        fi: "EU AML 2027",
        en: "EU AML 2027",
        es: "Reforma UE 2027",
      },
    },
    {
      href: "#mlro",
      label: {
        fi: "Oma asiantuntija",
        en: "Your expert",
        es: "Su especialista",
      },
    },
    {
      href: "#koulutukset",
      label: {
        fi: "Koulutukset",
        en: "Training",
        es: "Formación",
      },
    },
    {
      href: "#katja",
      label: {
        fi: "Meistä",
        en: "About us",
        es: "Sobre nosotros",
      },
    },
  ],
  contact: {
    label: {
      fi: "Ota yhteyttä",
      en: "Contact",
      es: "Contacto",
    },
    topic: "question",
  },
  languageLabel: {
    fi: "Kieli",
    en: "Language",
    es: "Idioma",
  },
  menuLabel: {
    fi: "Valikko",
    en: "Menu",
    es: "Menú",
  },
};
