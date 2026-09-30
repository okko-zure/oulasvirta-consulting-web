// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { Localized } from './types';

/** Title and description of the home page (search results, browser tab, social sharing). */
export const homeMeta: { title: Localized; description: Localized } = {
  title: {
    fi: "Oulasvirta Consulting | AML, pakotteet ja compliance",
    en: "Oulasvirta Consulting | AML, sanctions and compliance",
    es: "Oulasvirta Consulting | Prevención del blanqueo, sanciones y cumplimiento",
  },
  description: {
    fi: "AML-, pakote- ja compliance-asiantuntemusta pankeille ja muiden toimialojen yrityksille. EU AML -uudistus, MLRO-palvelut ja käytännön toteutus.",
    en: "AML, sanctions and compliance expertise for banks and businesses across sectors. EU AML readiness, MLRO services and practical implementation.",
    es: "Experiencia en prevención del blanqueo, sanciones y cumplimiento para bancos y empresas de diversos sectores. Reforma europea, servicios MLRO y aplicación práctica.",
  },
};
