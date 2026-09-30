// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, Localized } from './types';

interface Sector {
  title: Localized;
  text: Localized;
}

export interface SectorsContent {
  eyebrow: Localized;
  title: Localized;
  lead: Localized;
  banks: Sector;
  exporters: { eyebrow: Localized; title: Localized; text: Localized; points: Localized[]; cta: ContactCta };
  accounting: Sector;
  propertyManagement: Sector;
  gambling: Sector;
  /** Anonymised worked example for exporters. */
  exportCase: { eyebrow: Localized; title: Localized; paragraphs: Localized[]; note: Localized };
  cta: ContactCta;
}

export const sectors: SectorsContent = {
  eyebrow: {
    fi: "JOHDOLLE, JOKA VIE MUUTOSTA ETEENPÄIN",
    en: "FOR LEADERS DELIVERING CHANGE",
    es: "PARA QUIENES LIDERAN EL CAMBIO",
  },
  title: {
    fi: "Sääntelyosaamista.\n*Eri toimialojen tarpeisiin.*",
    en: "Regulatory expertise.\n*For businesses across sectors.*",
    es: "Conocimiento normativo.\n*Para diversos sectores.*",
  },
  lead: {
    fi: "Toimitusjohtajien sekä AML- ja compliance-johdon kumppani eri toimialoilla. Palvelut sovitetaan yrityksen toimintaan, riskeihin ja sovellettaviin vaatimuksiin. Alla esimerkkejä toimialoista.",
    en: "A partner to CEOs and AML and compliance leaders across sectors. Services are tailored to each business, its risks and the requirements that apply. The sectors below are examples.",
    es: "Colaboro con la dirección general y los responsables de prevención del blanqueo y cumplimiento de diversos sectores. Los servicios se adaptan a cada empresa, sus riesgos y los requisitos aplicables. Estos son algunos ejemplos de sectores.",
  },
  banks: {
    title: {
      fi: "Pankit ja muu finanssiala",
      en: "Banks and financial services",
      es: "Bancos y servicios financieros",
    },
    text: {
      fi: "Pankit ovat asiakastyöni ytimessä. Tuen AML- ja compliance-toimintojen kehittämistä, sääntelymuutosten toteutusta sekä johdon ja asiantuntijoiden työtä.",
      en: "Banks are at the heart of my client work. I support the development of AML and compliance functions, the implementation of regulatory change, and the work of management and specialist teams.",
      es: "Los bancos son el núcleo de mi actividad con clientes. Apoyo el desarrollo de las funciones de prevención del blanqueo y cumplimiento, la aplicación de cambios normativos y el trabajo de la dirección y de los equipos especializados.",
    },
  },
  exporters: {
    eyebrow: {
      fi: "KANSAINVÄLINEN LIIKETOIMINTA",
      en: "INTERNATIONAL BUSINESS",
      es: "NEGOCIOS INTERNACIONALES",
    },
    title: {
      fi: "Vientiyritykset",
      en: "Export businesses",
      es: "Empresas exportadoras",
    },
    text: {
      fi: "Vientikaupan pakoteriskit voivat koskea asiakkaita, omistajia, jakelijoita, muita liikekumppaneita ja maksuliikennettä. Autan arvioimaan, miten pakotteet vaikuttavat yrityksenne kauppaan ja miten riskit huomioidaan ennen uuden asiakkuuden, kumppanuuden tai investoinnin aloittamista.",
      en: "Sanctions risks in export trade can involve customers, owners, distributors, other business partners and payments. I help assess how sanctions affect your trade and how to address risks before starting a new customer relationship, partnership or investment.",
      es: "Los riesgos de sanciones en la exportación pueden afectar a clientes, propietarios, distribuidores, otros socios comerciales y pagos. Ayudo a evaluar cómo afectan las sanciones a sus operaciones y cómo gestionar los riesgos antes de iniciar una relación con un cliente, una colaboración o una inversión.",
    },
    points: [
      {
        fi: "Asiakkaiden ja liikekumppanien taustojen sekä omistusrakenteiden selvittäminen",
        en: "Background checks and ownership analysis for customers and business partners",
        es: "Análisis de antecedentes y estructuras de propiedad de clientes y socios comerciales",
      },
      {
        fi: "Liiketoimiin ja maksuliikenteeseen liittyvien pakoteriskien arviointi",
        en: "Assessment of sanctions risks in transactions and payments",
        es: "Evaluación de riesgos de sanciones en operaciones y pagos",
      },
      {
        fi: "Käytännön pakoteohjeet sekä myynnin, johdon ja taloushallinnon koulutus",
        en: "Practical sanctions procedures and training for sales, management and finance teams",
        es: "Procedimientos prácticos sobre sanciones y formación para equipos comerciales, directivos y financieros",
      },
    ],
    cta: {
      label: {
        fi: "Keskustellaan vientikauppanne riskeistä",
        en: "Let’s discuss the risks in your export trade",
        es: "Hablemos de los riesgos de sus exportaciones",
      },
      topic: "sanctions",
    },
  },
  accounting: {
    title: {
      fi: "Tilitoimistot ja tilintarkastusyhteisöt",
      en: "Accounting firms and auditors",
      es: "Asesorías contables y firmas de auditoría",
    },
    text: {
      fi: "Asiakkaan tunteminen ja omistusrakenteiden selvittäminen osaksi sujuvaa asiakastyötä. Kehitän riskiarvioita, ohjeita ja henkilöstön osaamista sekä autan valmistautumaan EU AML -uudistukseen.",
      en: "Integrating customer due diligence and ownership checks into everyday client work. I develop risk assessments, procedures and staff capabilities, and help firms prepare for the EU AML reform.",
      es: "Integración de la diligencia debida y el análisis de las estructuras de propiedad en el trabajo diario con clientes. Desarrollo evaluaciones de riesgos, procedimientos y formación, y ayudo a preparar la reforma europea de prevención del blanqueo.",
    },
  },
  propertyManagement: {
    title: {
      fi: "Isännöintiala",
      en: "Property management",
      es: "Administración de fincas",
    },
    text: {
      fi: "Asiakkaiden ja yhteistyökumppanien tunteminen, omistusrakenteiden selvittäminen sekä pakote- ja compliance-riskien hallinta. Palvelun sisältö määritellään yhtiön toiminnan ja sovellettavien velvoitteiden mukaan.",
      en: "Understanding customers and business partners, clarifying ownership structures, and managing sanctions and compliance risks. The scope is defined by the company’s activities and applicable obligations.",
      es: "Conocimiento de clientes y colaboradores, análisis de estructuras de propiedad y gestión de riesgos de sanciones y cumplimiento. El alcance se define según la actividad de la empresa y sus obligaciones aplicables.",
    },
  },
  gambling: {
    title: {
      fi: "Rahapeliyhtiöt",
      en: "Gambling operators",
      es: "Operadores de juego",
    },
    text: {
      fi: "AML-toimintamallin rakentaminen ja kehittäminen, pelaajan tunteminen, riskiperusteinen seuranta sekä johdon ja henkilöstön valmiudet. Tuen myös Suomen markkinoille valmistautuvia kansainvälisiä toimijoita.",
      en: "Building and improving AML frameworks, player due diligence, risk-based monitoring and the capabilities of management and staff. I also support international operators preparing to enter the Finnish market.",
      es: "Diseño y mejora del modelo de prevención del blanqueo, diligencia debida respecto del jugador, seguimiento basado en riesgos y preparación de la dirección y el personal. También apoyo a operadores internacionales que se preparan para entrar en el mercado finlandés.",
    },
  },
  exportCase: {
    eyebrow: {
      fi: "ESIMERKKI VIENTIYRITYKSELLE",
      en: "EXPORTER EXAMPLE",
      es: "EJEMPLO PARA UNA EMPRESA EXPORTADORA",
    },
    title: {
      fi: "Kun uusi omistaja pysäytti pankkipalvelut",
      en: "When a new owner brought banking services to a halt",
      es: "Cuando un nuevo propietario paralizó los servicios bancarios",
    },
    paragraphs: [
      {
        fi: "Pk-yritys etsi rahoittajaa investointiin ja löysi pohjoismaisen sijoittajan. Kun pankki selvitti uuden omistajan taustoja ja aiempia yritysyhteyksiä, yrityksen pankkipalvelut päätettiin lopettaa. Tilanne olisi voitu tunnistaa aiemmalla taustaselvityksellä ja omistusrakenteen tarkemmalla arvioinnilla.",
        en: "An SME was looking for funding for an investment and found a Nordic investor. When the bank reviewed the new owner’s background and earlier business connections, it decided to terminate the company’s banking services. Earlier background checks and a closer review of the ownership structure could have identified the situation sooner.",
        es: "Una pyme buscaba financiación para una inversión y encontró un inversor nórdico. Cuando el banco revisó los antecedentes del nuevo propietario y sus anteriores vínculos empresariales, decidió cancelar los servicios bancarios de la empresa. Una comprobación previa y un análisis más detallado de la estructura de propiedad podrían haber identificado la situación antes.",
      },
      {
        fi: "Autan vienti- ja kasvuyrityksiä arvioimaan uudet asiakkaat, omistajat ja liikekumppanit sekä niihin liittyvät pakote- ja talousrikollisuusriskit ennen kuin ne muuttuvat pankkisuhteen tai liiketoiminnan ongelmaksi.",
        en: "I help export and growth companies assess new customers, owners and business partners, including sanctions and financial crime risks, before they become a banking or business problem.",
        es: "Ayudo a empresas exportadoras y de crecimiento a evaluar nuevos clientes, propietarios y socios comerciales, incluidos los riesgos de sanciones y delincuencia financiera, antes de que se conviertan en un problema bancario o empresarial.",
      },
    ],
    note: {
      fi: "Esimerkki perustuu anonymisoituun yritystilanteeseen; tunnistetietoja ei julkaista.",
      en: "This example is based on an anonymised business situation; no identifying information is published.",
      es: "Este ejemplo se basa en una situación empresarial anonimizada; no se publica información identificativa.",
    },
  },
  cta: {
    label: {
      fi: "Keskustellaan yrityksenne tarpeista",
      en: "Let's discuss your business needs",
      es: "Hablemos de las necesidades de su empresa",
    },
    topic: "question",
  },
};
