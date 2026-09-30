// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, Localized, SectionHeadingContent } from './types';

export interface ServicesContent {
  heading: SectionHeadingContent;
  title: Localized;
  paragraphs: Localized[];
  cta: ContactCta;
  /** Expandable list, one entry per service. */
  items: { number: string; title: Localized; text: Localized; points: Localized[]; cta: ContactCta }[];
}

export const services: ServicesContent = {
  heading: {
    eyebrow: {
      fi: "03 / ASIANTUNTIJAPALVELUT",
      en: "03 / ADVISORY SERVICES",
      es: "03 / SERVICIOS DE ASESORAMIENTO",
    },
    note: {
      fi: "Yksittäisestä kysymyksestä laajaan muutokseen",
      en: "From a specific question to a major change",
      es: "De una consulta concreta a un cambio amplio",
    },
  },
  title: {
    fi: "Oikea osaaminen.\n*Olennaisiin riskeihin.*",
    en: "The right expertise.\n*For the risks that matter.*",
    es: "Experiencia especializada.\n*Para los riesgos relevantes.*",
  },
  paragraphs: [
    {
      fi: "Palvelen pankkeja ja muiden toimialojen yrityksiä AML-, pakote- ja compliance-kysymyksissä. Yhdistän juridisen osaamisen, käytännön kokemuksen ja yrityksenne liiketoiminnan ymmärryksen.",
      en: "I advise banks and businesses across sectors on AML, sanctions and compliance. I combine legal expertise, practical experience and an understanding of your business.",
      es: "Asesoro a bancos y empresas de diversos sectores sobre prevención del blanqueo, sanciones y cumplimiento. Combino conocimiento jurídico, experiencia práctica y comprensión de su negocio.",
    },
    {
      fi: "Yhteistyö voi olla projekti, jatkuva kuukausipalvelu tai rajattu asiantuntijatoimeksianto.",
      en: "We can work together on a project, an ongoing monthly engagement or a defined advisory assignment.",
      es: "Podemos colaborar mediante un proyecto, un servicio mensual continuo o un encargo de asesoramiento delimitado.",
    },
  ],
  cta: {
    label: {
      fi: "Löydetään sopiva tapa toimia",
      en: "Find the right way to work together",
      es: "Busquemos la forma de colaborar",
    },
    topic: "question",
  },
  items: [
    {
      number: "01",
      title: {
        fi: "Rahanpesun ja terrorismin\nrahoituksen estäminen",
        en: "Anti-money laundering and\ncounter-terrorist financing",
        es: "Prevención del blanqueo de capitales\ny de la financiación del terrorismo",
      },
      text: {
        fi: "Riskiperusteiset toimintatavat auttavat kohdentamaan työn olennaisiin riskeihin. Tuen yritystänne AML-vaatimusten tulkinnassa ja niiden käytännön toteutuksessa.",
        en: "A risk-based approach focuses effort where it matters. I help your business interpret AML requirements and put them into practice.",
        es: "Un enfoque basado en riesgos permite concentrar los esfuerzos donde más se necesitan. Ayudo a su empresa a interpretar los requisitos de prevención del blanqueo y aplicarlos.",
      },
      points: [
        {
          fi: "Riskiarvioiden ja toimintaohjeiden kehittäminen",
          en: "Risk assessment and procedure development",
          es: "Desarrollo de evaluaciones de riesgos y procedimientos",
        },
        {
          fi: "Asiakkaan tunteminen, tehostetut toimet ja jatkuva seuranta",
          en: "Customer due diligence, enhanced measures and ongoing monitoring",
          es: "Diligencia debida, medidas reforzadas y seguimiento continuo",
        },
        {
          fi: "Epäilyttävien liiketoimien käsittelyn ja ilmoitusprosessin kehittäminen",
          en: "Developing suspicious transaction handling and reporting processes",
          es: "Desarrollo de procesos de análisis y comunicación de operaciones sospechosas",
        },
        {
          fi: "AML-toimintamallien ja kontrollien arviointi",
          en: "Reviewing AML frameworks and controls",
          es: "Evaluación del modelo AML y de sus controles",
        },
      ],
      cta: {
        label: {
          fi: "Kysy AML-palveluista",
          en: "Ask about AML services",
          es: "Consulta los servicios de prevención del blanqueo",
        },
        topic: "question",
      },
    },
    {
      number: "02",
      title: {
        fi: "Pakotteiden noudattaminen",
        en: "Sanctions compliance",
        es: "Cumplimiento de sanciones",
      },
      text: {
        fi: "Pakoteriskien hallinta kuuluu myös yrityksille, jotka eivät ole rahanpesulain mukaisia ilmoitusvelvollisia. Autan tunnistamaan liiketoimintanne pakoteriskit ja rakentamaan niihin sopivat menettelyt.",
        en: "Sanctions risk management also matters for businesses that are not obliged entities under AML legislation. I help identify sanctions risks in your operations and develop suitable procedures.",
        es: "La gestión del riesgo de sanciones también afecta a empresas que no son sujetos obligados por la normativa de prevención del blanqueo. Identifico los riesgos de su actividad y desarrollo procedimientos adecuados.",
      },
      points: [
        {
          fi: "EU:n, Yhdysvaltojen ja Ison-Britannian pakotteiden soveltumisen arviointi yrityksenne liiketoimintaan",
          en: "Assessing how EU, US and UK sanctions apply to your business",
          es: "Evaluación de la aplicación de las sanciones de la UE, Estados Unidos y Reino Unido a su actividad",
        },
        {
          fi: "Asiakkaisiin, omistajiin, liikekumppaneihin ja maksuliikenteeseen liittyvien pakoteriskien arviointi",
          en: "Assessing sanctions risks relating to customers, owners, business partners and payments",
          es: "Evaluación de riesgos de sanciones relacionados con clientes, propietarios, socios comerciales y pagos",
        },
        {
          fi: "Pakoteohjeet, riskien arviointi ja henkilöstön koulutus",
          en: "Sanctions procedures, risk assessment and staff training",
          es: "Procedimientos de sanciones, evaluación de riesgos y formación",
        },
        {
          fi: "Seulonnan ja poikkeamien käsittelyn kehittäminen",
          en: "Improving screening and alert handling",
          es: "Mejora del filtrado y la gestión de alertas",
        },
      ],
      cta: {
        label: {
          fi: "Kysy pakoteneuvonnasta",
          en: "Ask about sanctions advice",
          es: "Consulta el asesoramiento sobre sanciones",
        },
        topic: "sanctions",
      },
    },
    {
      number: "03",
      title: {
        fi: "Compliance ja riskienhallinta",
        en: "Compliance and risk management",
        es: "Cumplimiento y gestión de riesgos",
      },
      text: {
        fi: "Selkeät vastuut, toimivat kontrollit ja ymmärrettävä raportointi tukevat johdon päätöksentekoa. Autan kehittämään compliance-toimintoa yrityksen kokoon ja toimintaan sopivaksi.",
        en: "Clear responsibilities, effective controls and understandable reporting support management decisions. I help build a compliance function that fits your business and its scale.",
        es: "Responsabilidades claras, controles eficaces e informes comprensibles facilitan las decisiones de la dirección. Ayudo a desarrollar una función de cumplimiento adecuada al tamaño y a la actividad de su empresa.",
      },
      points: [
        {
          fi: "Hallintomallit, vastuut ja sisäiset menettelyt",
          en: "Governance, responsibilities and internal procedures",
          es: "Gobernanza, responsabilidades y procedimientos internos",
        },
        {
          fi: "Riskiperusteisten prosessien kehittäminen",
          en: "Developing risk-based processes",
          es: "Desarrollo de procesos basados en riesgos",
        },
        {
          fi: "Johdon ja hallituksen päätöksenteon tuki",
          en: "Decision support for management and boards",
          es: "Apoyo a las decisiones de la dirección y del consejo",
        },
        {
          fi: "Määräaikainen asiantuntijatuki ja sijaisuudet sovitussa roolissa",
          en: "Interim specialist support and cover in an agreed role",
          es: "Apoyo temporal y sustituciones en funciones acordadas",
        },
      ],
      cta: {
        label: {
          fi: "Keskustellaan compliance-tarpeista",
          en: "Discuss your compliance needs",
          es: "Hablemos de sus necesidades de cumplimiento",
        },
        topic: "question",
      },
    },
    {
      number: "04",
      title: {
        fi: "Koulutukset",
        en: "Training",
        es: "Formación",
      },
      text: {
        fi: "Koulutus sidotaan osallistujien tehtäviin ja yrityksenne käytännön tilanteisiin. Tavoitteena on osaaminen, joka näkyy jokapäiväisessä työssä.",
        en: "Training is tailored to participants' roles and real situations in your business. The aim is knowledge that makes a difference in everyday work.",
        es: "La formación se adapta a las funciones de los participantes y a situaciones reales de su empresa. El objetivo es un conocimiento que resulte útil en el trabajo diario.",
      },
      points: [
        {
          fi: "AML- ja pakotekoulutukset henkilöstölle",
          en: "AML and sanctions training for staff",
          es: "Formación del personal en prevención del blanqueo y sanciones",
        },
        {
          fi: "Johdon ja hallituksen vastuut",
          en: "Management and board responsibilities",
          es: "Responsabilidades de la dirección y del consejo",
        },
        {
          fi: "EU:n AML-uudistukseen valmistautuminen",
          en: "Preparing for the EU AML reform",
          es: "Preparación para la reforma europea contra el blanqueo",
        },
        {
          fi: "Asiantuntijapäivät, työpajat ja jatkuva koulutus",
          en: "Specialist sessions, workshops and ongoing training",
          es: "Sesiones especializadas, talleres y formación continua",
        },
      ],
      cta: {
        label: {
          fi: "Suunnitellaan koulutus",
          en: "Plan a training session",
          es: "Planifiquemos la formación",
        },
        topic: "training",
      },
    },
  ],
};
