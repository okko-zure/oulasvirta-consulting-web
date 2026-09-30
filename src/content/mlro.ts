// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, ExternalLink, Localized, SectionHeadingContent } from './types';

interface Plan {
  eyebrow: Localized;
  /** Working time per week, e.g. amount "1" + unit "day / week". */
  time: { amount: string; unit: Localized };
  title: Localized;
  text: Localized;
  points: Localized[];
  cta: ContactCta;
  /** Highlighted card. */
  accent?: boolean;
}

export interface MlroContent {
  heading: SectionHeadingContent;
  title: Localized;
  lead: Localized;
  text: Localized;
  definition: Localized;
  plans: Plan[];
  engagement: { title: Localized; text: Localized }[];
  roleDetail: { summary: Localized; paragraphs: Localized[]; link: ExternalLink };
}

export const mlro: MlroContent = {
  heading: {
    eyebrow: {
      fi: "02 / OMA RISKIENHALLINTA-ASIANTUNTIJA",
      en: "02 / YOUR RISK MANAGEMENT EXPERT",
      es: "02 / SU ESPECIALISTA EN GESTIÓN DE RIESGOS",
    },
    note: {
      fi: "Johtamista ja käytännön toteutusta",
      en: "Leadership and practical delivery",
      es: "Dirección y ejecución práctica",
    },
  },
  title: {
    fi: "Oma riskienhallinta-asiantuntija.\n*Kokonaisuus hallintaan.*",
    en: "Your own risk management expert.\n*A clear lead on delivery.*",
    es: "Su especialista en gestión de riesgos.\n*Dirección para avanzar.*",
  },
  lead: {
    fi: "Tarvitseeko yrityksenne kokenutta osaamista talousrikollisuuden estämiseen ilman kokopäiväistä rekrytointia?",
    en: "Does your business need financial crime prevention expertise without a full-time hire?",
    es: "¿Necesita su empresa experiencia en prevención de delitos financieros sin contratar a alguien a jornada completa?",
  },
  text: {
    fi: "Voin toimia yrityksessänne esimerkiksi MLRO:na tai talousrikollisuuden estämisen asiantuntijana 1–2 päivänä viikossa. Saatte liiketoimintaanne perehtyneen juristin osaksi yrityksenne arkea. Roolini sovitaan tarpeidenne mukaan: voin johtaa sovittua kokonaisuutta, kehittää toimintatapoja sekä tukea johtoa ja asiantuntijoita.",
    en: "I can join your business for 1–2 days a week, in a role such as MLRO or financial crime prevention specialist. You gain a legal professional who understands your business and becomes part of your day-to-day operations. My role is tailored to your needs: I can lead the agreed remit, develop processes and support management and specialist teams.",
    es: "Puedo incorporarme a su empresa 1–2 días a la semana, por ejemplo, como MLRO o especialista en prevención de delitos financieros. Contará con una jurista que conoce su negocio y se integra en su actividad diaria. Mi función se adapta a sus necesidades: puedo dirigir el área acordada, mejorar los procedimientos y apoyar a la dirección y a los equipos especializados.",
  },
  definition: {
    fi: "MLRO tarkoittaa rahanpesun estämisen vastuuhenkilöä (Money Laundering Reporting Officer).",
    en: "MLRO stands for Money Laundering Reporting Officer.",
    es: "MLRO significa Money Laundering Reporting Officer: responsable de prevención del blanqueo y de las comunicaciones que correspondan según el marco aplicable.",
  },
  plans: [
    {
      eyebrow: {
        fi: "AML-KUMPPANI",
        en: "AML PARTNER",
        es: "COLABORACIÓN AML",
      },
      time: {
        amount: "1",
        unit: {
          fi: "päivä / viikko",
          en: "day / week",
          es: "día / semana",
        },
      },
      title: {
        fi: "Jatkuvuutta ja selkeä suunta.",
        en: "Continuity and direction.",
        es: "Continuidad y dirección.",
      },
      text: {
        fi: "Kun yrityksellänne on jo AML-toimintamalli ja tarvitsette kokeneen asiantuntijan sovitun kokonaisuuden hoitamiseen.",
        en: "For businesses with an existing AML framework that need an experienced specialist to manage an agreed area of work.",
        es: "Para empresas que ya cuentan con un modelo AML y necesitan una especialista experimentada para gestionar un ámbito de trabajo acordado.",
      },
      points: [
        {
          fi: "MLRO:n ja johdon sovitut sparraukset",
          en: "Agreed advisory sessions with the MLRO and management",
          es: "Sesiones de asesoramiento con el MLRO y la dirección",
        },
        {
          fi: "Ohjeiden ja riskiarvion valmistelun tuki",
          en: "Support with procedures and risk assessment preparation",
          es: "Apoyo en la preparación de procedimientos y evaluaciones de riesgos",
        },
        {
          fi: "Asiakkaan tuntemisen ja poikkeamien käsittelyn neuvonta",
          en: "Advice on customer due diligence and handling unusual activity",
          es: "Asesoramiento en diligencia debida y gestión de operaciones inusuales",
        },
        {
          fi: "Priorisoitu työlista ja kuukausittainen tilannekuva",
          en: "A prioritised work plan and monthly progress update",
          es: "Plan de trabajo priorizado e informe mensual de avances",
        },
      ],
      cta: {
        label: {
          fi: "Keskustellaan AML-kumppanuudesta",
          en: "Discuss an AML partnership",
          es: "Hablemos de colaboración en AML",
        },
        topic: "partnership",
      },
    },
    {
      eyebrow: {
        fi: "MLRO JA MUUTOSJOHTO",
        en: "MLRO & CHANGE LEADERSHIP",
        es: "MLRO Y GESTIÓN DEL CAMBIO",
      },
      time: {
        amount: "2",
        unit: {
          fi: "päivää / viikko",
          en: "days / week",
          es: "días / semana",
        },
      },
      title: {
        fi: "Vastuunottoa uudistukseen.",
        en: "Leadership for your reform.",
        es: "Liderazgo para la reforma.",
      },
      text: {
        fi: "Kun tarvitsette AML-toiminnon vetäjän tai kumppanin johtamaan EU AML -uudistuksen läpivientiä. MLRO-rooli määritellään yrityskohtaisesti.",
        en: "For businesses seeking an AML lead or a partner to manage EU AML implementation. The MLRO role is defined for each engagement.",
        es: "Para empresas que necesitan una persona al frente de la función AML o una colaboradora que dirija la aplicación de la reforma europea. El papel del MLRO se define para cada encargo.",
      },
      points: [
        {
          fi: "Sovitun AML-kokonaisuuden johtaminen ja raportointi",
          en: "Leadership and reporting for the agreed AML remit",
          es: "Dirección e informes sobre el ámbito AML acordado",
        },
        {
          fi: "EU AML -muutoskartan valmistelu ja toteutuksen johtaminen",
          en: "EU AML roadmap development and implementation leadership",
          es: "Preparación de la hoja de ruta europea y dirección de su ejecución",
        },
        {
          fi: "Prosessien ja kontrollien kehittäminen",
          en: "Process and control development",
          es: "Desarrollo de procesos y controles",
        },
        {
          fi: "Johdon päätösmateriaalit ja sovitut koulutukset",
          en: "Management decision materials and agreed training",
          es: "Documentación para decisiones de la dirección y formación acordada",
        },
      ],
      cta: {
        label: {
          fi: "Keskustellaan MLRO-palvelusta",
          en: "Discuss MLRO services",
          es: "Hablemos de servicios MLRO",
        },
        topic: "mlro",
      },
      accent: true,
    },
  ],
  engagement: [
    {
      title: {
        fi: "Näin yhteistyö toimii",
        en: "How we work together",
        es: "Cómo trabajamos",
      },
      text: {
        fi: "Aluksi kartoitamme nykytilan ja sovimme ensimmäisten kolmen kuukauden tavoitteet. Varaamme yhteistyölle työpäivät ja seuraamme etenemistä kuukausittain.",
        en: "We start by assessing the current position and agreeing objectives for the first three months. We reserve working days for the engagement and review progress monthly.",
        es: "Comenzamos con un análisis de la situación y fijamos los objetivos de los primeros tres meses. Reservamos jornadas para el encargo y revisamos los avances cada mes.",
      },
    },
    {
      title: {
        fi: "Selkeä kuukausipalvelu",
        en: "A defined monthly service",
        es: "Un servicio mensual definido",
      },
      text: {
        fi: "Kiinteä kuukausihinta sovitulle työmäärälle ja tehtäväkokonaisuudelle. Aloituksen laajuus, lisätyöt, tavoitettavuus ja poissaolojen järjestelyt sovitaan erikseen.",
        en: "A fixed monthly fee for an agreed workload and scope. Initial assessment, additional work, availability and arrangements for absences are agreed separately.",
        es: "Honorarios mensuales fijos para una carga de trabajo y un alcance acordados. El análisis inicial, los trabajos adicionales, la disponibilidad y la cobertura de ausencias se pactan por separado.",
      },
    },
  ],
  roleDetail: {
    summary: {
      fi: "Vastuut ja palvelun soveltuvuus",
      en: "Responsibilities and suitability",
      es: "Responsabilidades y adecuación del servicio",
    },
    paragraphs: [
      {
        fi: "Tehtävät, toimivaltuudet, raportointisuhteet, tavoitettavuus sekä tietojen käsittely määritellään toimeksiannossa. Työmäärä mitoitetaan toiminnan laajuuteen ja riskeihin: vaativa kokonaisuus voi edellyttää lisäresursseja.",
        en: "Tasks, authority, reporting lines, availability and data handling are defined in the engagement. The workload reflects the scale and risks of the business: a demanding remit may require additional resources.",
        es: "Las tareas, facultades, líneas de reporte, disponibilidad y tratamiento de datos se definen en el encargo. La dedicación se ajusta al volumen y a los riesgos de la actividad; un encargo exigente puede requerir recursos adicionales.",
      },
      {
        fi: "Nimetyn MLRO-roolin järjestäminen ja ulkoistettavien tehtävien rajat arvioidaan yritys- ja toimialakohtaisesti sovellettavan sääntelyn perusteella. Yrityksen lakisääteinen vastuu säilyy yrityksellä. Soveltuvat ulkoistusrajoitukset ja yritykselle kuuluva päätösvalta huomioidaan aina palvelun rajauksessa.",
        en: "A formal MLRO appointment and the limits on outsourced tasks are assessed for each business and sector under the applicable rules. The obliged entity retains its statutory responsibility. Outsourcing restrictions and decisions reserved to the business are always reflected in the agreed scope.",
        es: "La designación formal como MLRO y los límites de las tareas externalizadas se evalúan para cada empresa y sector conforme a la normativa aplicable. El sujeto obligado conserva su responsabilidad legal. El alcance acordado respeta las restricciones de externalización y las decisiones reservadas a la empresa.",
      },
    ],
    link: {
      label: {
        fi: "AMLR:n 11 ja 18 artikla",
        en: "AMLR Articles 11 and 18",
        es: "Artículos 11 y 18 del AMLR",
      },
      href: {
        fi: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj?locale=fi",
        en: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj?locale=en",
        es: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj?locale=es",
      },
    },
  },
};
