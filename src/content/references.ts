// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, ExternalLink, Locale, Localized } from './types';

/**
 * A testimonial. The original wording is shown verbatim as a quotation on the
 * page of its own language. Languages that have a `summary` show that summary
 * (a paraphrase, not a quotation) instead, so that no invented quotation is
 * ever attributed to a person.
 */
interface Quote {
  original: { text: string; lang: Locale };
  summary: Partial<Record<Locale, string>>;
}

interface CaseStory {
  /** Anchor id of the expandable story. */
  id: string;
  summary: Localized;
  sections: { heading: Localized; paragraphs: Localized[] }[];
  cta: ContactCta;
}

interface Reference {
  clientLabel: { title: Localized; description: Localized };
  /** Small label above the quotation. */
  recommendationLabel?: Localized;
  quote: Quote;
  credit: { name: string; role: Localized };
  text: Localized;
  link?: ExternalLink;
  story?: CaseStory;
}

export interface ReferencesContent {
  eyebrow: Localized;
  /** Visually hidden h2 that names the section for screen readers. */
  hiddenTitle: Localized;
  items: Reference[];
}

export const references: ReferencesContent = {
  eyebrow: {
    fi: "05 / KOKEMUKSIA YHTEISTYÖSTÄ",
    en: "05 / WORKING TOGETHER",
    es: "05 / EXPERIENCIAS DE COLABORACIÓN",
  },
  hiddenTitle: {
    fi: "Asiakaspalautteet ja referenssit",
    en: "Client feedback and references",
    es: "Opiniones y referencias",
  },
  items: [
    {
      clientLabel: {
        title: {
          fi: "Muutoksen johtaminen",
          en: "Leading change",
          es: "Dirección del cambio",
        },
        description: {
          fi: "Sääntelyosaamista ja\nprojektin läpivientiä",
          en: "Regulatory expertise and\nproject delivery",
          es: "Conocimiento normativo y\nejecución de proyectos",
        },
      },
      quote: {
        original: {
          text: "“Katja johti projektia erinomaisesti ja asiantuntevasti vieden sen läpi yhteisen tavoitteen mukaisesti - aikataulussa ja laadukkaasti.”",
          lang: "fi",
        },
        summary: {
          en: "Laura's recommendation highlights the successful delivery of a demanding AML project, combining regulatory knowledge with change management.",
          es: "La recomendación de Laura destaca la ejecución satisfactoria de un proyecto AML exigente, combinando conocimiento normativo y gestión del cambio.",
        },
      },
      credit: {
        name: "Laura Pohjonen",
        role: {
          fi: "Talousrikollisuuden torjunnan päällikkö, Säästöpankkiryhmä",
          en: "Head of Financial Crime Prevention, Säästöpankkiryhmä",
          es: "Responsable de prevención de la delincuencia financiera, Säästöpankkiryhmä",
        },
      },
      text: {
        fi: "Laura korostaa suosituksessaan Katjan kykyä muuttaa laajat vaatimukset konkreettisiksi toimiksi ja saada organisaation eri osapuolet mukaan muutokseen.",
        en: "She particularly values Katja's ability to make requirements actionable and bring stakeholders together.",
        es: "Valora especialmente su capacidad para concretar los requisitos e implicar a las partes interesadas.",
      },
      recommendationLabel: {
        fi: "HENKILÖKOHTAINEN LINKEDIN-SUOSITUS",
        en: "PERSONAL LINKEDIN RECOMMENDATION",
        es: "RECOMENDACIÓN PERSONAL EN LINKEDIN",
      },
      link: {
        href: "https://fi.linkedin.com/in/katja-oulasvirta-8564631",
        label: {
          fi: "Lue suositus LinkedInissä",
          en: "Read the recommendation on LinkedIn",
          es: "Lee la recomendación en LinkedIn",
        },
      },
    },
    {
      clientLabel: {
        title: {
          fi: "OP Ryhmä",
          en: "OP Financial Group",
          es: "OP Financial Group",
        },
        description: {
          fi: "Rahanpesun estämisen\ntoimintamallien kehittäminen",
          en: "Developing AML\noperating practices",
          es: "Desarrollo de modelos\noperativos de prevención del blanqueo",
        },
      },
      quote: {
        original: {
          text: "“Katja excels in translating regulatory expertise into actionable business requirements in AML risk management.”",
          lang: "en",
        },
        summary: {
          en: "Daniel's feedback highlights Katja's ability to connect AML regulatory knowledge with practical business needs.",
          es: "Daniel destaca la capacidad de Katja para conectar el conocimiento normativo en prevención del blanqueo con las necesidades prácticas del negocio.",
        },
      },
      credit: {
        name: "Daniel Amsler",
        role: {
          fi: "Asiakaspalaute, OP Ryhmä",
          en: "Client feedback summary, OP Financial Group",
          es: "Resumen de la opinión del cliente, OP Financial Group",
        },
      },
      text: {
        fi: "Tuimme riskiperusteisten AML-menettelyjen kehittämistä strategisesta valmistelusta käytännön toteutukseen. Työhön kuului prosessien arviointia sekä sääntelyyn ja viranomaisohjeisiin perustuvien päätösmateriaalien valmistelua.",
        en: "The engagement supported risk-based AML practices, from strategic preparation to implementation. It included process reviews and management decision materials grounded in regulation and supervisory guidance.",
        es: "El encargo apoyó el desarrollo de prácticas AML basadas en riesgos, desde la preparación estratégica hasta la ejecución. Incluyó la revisión de procesos y documentación para decisiones de la dirección basada en la normativa y las directrices supervisoras.",
      },
      story: {
        id: "op-asiakastarina",
        summary: {
          fi: "Lue OP-asiakastarina",
          en: "Read the OP case study",
          es: "Leer el caso de OP",
        },
        sections: [
          {
            heading: {
              fi: "Lähtötilanne ja tavoite",
              en: "The starting point and objective",
              es: "Situación inicial y objetivo",
            },
            paragraphs: [
              {
                fi: "OP Ryhmän talousrikollisuuden torjunnan organisaatio tarvitsi tukea rahanpesun estämisen prosessien kehittämiseen. Tavoitteena oli vahvistaa riskiperusteista toimintaa ja viedä laaja muutos strategisesta valmistelusta käytännön työhön.",
                en: "OP Financial Group’s financial crime prevention organisation needed support in developing its AML processes. The aim was to strengthen a risk-based approach and carry a substantial change from strategic preparation into everyday operations.",
                es: "El área de prevención de la delincuencia financiera de OP Financial Group necesitaba apoyo para desarrollar sus procesos de prevención del blanqueo. El objetivo era reforzar el enfoque basado en el riesgo y trasladar un cambio de gran alcance desde la preparación estratégica a la operativa diaria.",
              },
            ],
          },
          {
            heading: {
              fi: "Näin autoin",
              en: "How I helped",
              es: "Mi aportación",
            },
            paragraphs: [
              {
                fi: "Tuin johtoa kokonaisuuden suunnittelussa sekä muutoksen edellytysten ja haasteiden tunnistamisessa. Arvioimme prosessista vastaavan yksikön kanssa toimintatapojen sujuvoittamista sääntelyn ja Finanssivalvonnan ohjeistuksen pohjalta.",
                en: "I supported management in planning the work and identifying the requirements and challenges of the change. Together with the unit responsible for the process, we assessed opportunities to streamline procedures using legislation and Finnish Financial Supervisory Authority guidance.",
                es: "Apoyé a la dirección en la planificación del trabajo y en la identificación de las condiciones y los retos del cambio. Junto con la unidad responsable del proceso, evaluamos cómo agilizar los procedimientos a partir de la normativa y las orientaciones de la Autoridad Finlandesa de Supervisión Financiera.",
              },
              {
                fi: "Valmistelin päätösmateriaaleja eri johtamistasoille. Niiden avulla organisaation eri puolustuslinjat pystyivät muodostamaan yhteisen näkemyksen tavoitteista ja tarvittavista ratkaisuista.",
                en: "I prepared decision-making materials for different management levels, helping the organisation’s lines of defence align on common objectives and the changes needed.",
                es: "Preparé documentación para la toma de decisiones en distintos niveles directivos, facilitando que las líneas de defensa de la organización compartieran una visión de los objetivos y las soluciones necesarias.",
              },
            ],
          },
          {
            heading: {
              fi: "Yhteistyön tulos",
              en: "The outcome",
              es: "Resultado de la colaboración",
            },
            paragraphs: [
              {
                fi: "Yhteistyö tuki asiakkuuksiin liittyvää AML-vaatimustenmukaisuutta ja rahanpesun estämisen menettelyjen sujuvoittamista. Samalla asiantuntijoiden työtä voitiin kohdentaa olennaisten rahanpesuriskien hallintaan.",
                en: "The collaboration supported customer-related AML compliance and more streamlined AML procedures. It also helped focus specialists’ work on managing material money laundering risks.",
                es: "La colaboración contribuyó al cumplimiento de los requisitos de prevención del blanqueo relacionados con clientes y a la mejora de los procedimientos. También ayudó a orientar el trabajo de los especialistas hacia la gestión de los riesgos de blanqueo más relevantes.",
              },
            ],
          },
        ],
        cta: {
          label: {
            fi: "Keskustellaan yrityksenne kehitystarpeista",
            en: "Let’s discuss your organisation’s development needs",
            es: "Hablemos de las necesidades de mejora de su empresa",
          },
          topic: "question",
        },
      },
    },
  ],
};
