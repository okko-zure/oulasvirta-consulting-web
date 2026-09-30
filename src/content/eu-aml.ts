// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactCta, ExternalLink, Locale, Localized, SectionHeadingContent } from './types';

interface Regulation {
  /** Full name of the instrument. */
  term: Localized;
  /** Official English name and number. Written in English on purpose. */
  id: Localized;
  /** Marks languages in which `id` is English text, so that it is announced with the right pronunciation. */
  idLang?: Partial<Record<Locale, Locale>>;
  text: Localized;
  link?: ExternalLink;
  /** Spans both columns of the list. */
  wide?: boolean;
}

export interface EuAmlContent {
  heading: SectionHeadingContent;
  title: Localized;
  lead: Localized;
  paragraphs: Localized[];
  experience: { eyebrow: Localized; text: Localized };
  /** The large date panel. `day` and `year` are not translated. */
  datePanel: { eyebrow: Localized; day: string; year: string; points: Localized };
  steps: { number: string; title: Localized; text: Localized; deliverable: Localized }[];
  cta: ContactCta;
  /** Expandable list of the EU and Finnish instruments. */
  sources: { summary: Localized; intro: Localized; items: Regulation[] };
}

export const euAml: EuAmlContent = {
  heading: {
    eyebrow: {
      fi: "01 / EU AML -UUDISTUS",
      en: "01 / EU AML REFORM",
      es: "01 / REFORMA EUROPEA CONTRA EL BLANQUEO",
    },
    note: {
      fi: "Sääntelystä käytännön toteutukseen",
      en: "From regulation to implementation",
      es: "De la normativa a la aplicación práctica",
    },
  },
  title: {
    fi: "Ovatko yrityksenne toimintatavat\nvalmiina *uudistukseen?*",
    en: "Are your processes\nready for *what's next?*",
    es: "¿Está su empresa\npreparada para *la reforma?*",
  },
  lead: {
    fi: "EU:n uusi rahanpesuasetus muuttaa ilmoitusvelvollisten toimintaympäristöä. Nyt on aika selvittää, mitä uudistus tarkoittaa juuri teidän yrityksellenne.",
    en: "The EU's new Anti-Money Laundering Regulation changes the framework for obliged entities. Now is the time to understand what it means for your business.",
    es: "El nuevo Reglamento europeo de prevención del blanqueo de capitales cambia el marco de actuación de los sujetos obligados. Es el momento de determinar qué implica para su empresa.",
  },
  paragraphs: [
    {
      fi: "Rahanpesuasetusta eli AMLR:ää sovelletaan pääosin 10.7.2027 alkaen. Valmistautuminen edellyttää oman toiminnan arviointia: mitä pitää muuttaa asiakkaan tuntemisessa, riskiarviossa, seurannassa, raportoinnissa ja vastuunjaossa?",
      en: "The Anti-Money Laundering Regulation, or AMLR, generally applies from 10 July 2027. Preparation starts with reviewing your business: what needs to change in customer due diligence, risk assessment, monitoring, reporting and responsibilities?",
      es: "El Reglamento de prevención del blanqueo de capitales, o AMLR, será aplicable con carácter general a partir del 10 de julio de 2027. La preparación exige revisar la diligencia debida, la evaluación de riesgos, el seguimiento, las comunicaciones y la distribución de responsabilidades.",
    },
    {
      fi: "Autan tunnistamaan olennaiset muutokset ja viemään ne ohjeisiin, prosesseihin, asiakastietoihin sekä järjestelmävaatimuksiin. Työ mitoitetaan yrityksenne toimintaan ja riskeihin.",
      en: "I identify the changes that matter and translate them into policies, processes, customer data and system requirements. The work is tailored to your business and its risks.",
      es: "Identifico los cambios relevantes y los traslado a políticas, procesos, datos de clientes y requisitos de sistemas. El trabajo se adapta a la actividad y a los riesgos de su empresa.",
    },
  ],
  experience: {
    eyebrow: {
      fi: "KOKEMUSTA JO TOTEUTUKSESTA",
      en: "IMPLEMENTATION EXPERIENCE",
      es: "EXPERIENCIA EN IMPLEMENTACIÓN",
    },
    text: {
      fi: "Olen tukenut finanssialan toimijoita EU:n AML-paketin käytäntöön viemisessä. Tuon yrityksenne valmistautumiseen kokemusta tulevan sääntelyn tulkinnasta ja toteutuksesta.",
      en: "I have supported financial sector organisations in implementing the EU AML package. I bring practical experience of interpreting and implementing the forthcoming rules to your organisation’s preparations.",
      es: "He apoyado a entidades del sector financiero en la implementación del paquete europeo de prevención del blanqueo. Aporto experiencia práctica en la interpretación y aplicación de la futura normativa a la preparación de su empresa.",
    },
  },
  datePanel: {
    eyebrow: {
      fi: "AMLR:N PÄÄASIALLINEN SOVELTAMINEN",
      en: "AMLR: GENERAL APPLICATION DATE",
      es: "AMLR: FECHA GENERAL DE APLICACIÓN",
    },
    day: "10.07.",
    year: "2027",
    points: {
      fi: "Selvitä vaikutukset.\nPriorisoi muutokset.\nVaraa aikaa toteutukselle.",
      en: "Understand the impact.\nPrioritise the changes.\nAllow time to implement.",
      es: "Comprende el impacto.\nPrioriza los cambios.\nReserva tiempo para aplicarlos.",
    },
  },
  steps: [
    {
      number: "01",
      title: {
        fi: "Nykytila näkyväksi",
        en: "Understand your starting point",
        es: "Conozca su situación actual",
      },
      text: {
        fi: "Arvioimme, mitä vaatimuksia toimintaanne sovelletaan ja missä nykyiset käytännöt vaativat muutoksia.",
        en: "We assess the requirements that apply to your business and identify where current practices need to change.",
        es: "Evaluamos los requisitos aplicables a su actividad e identificamos qué prácticas necesitan cambios.",
      },
      deliverable: {
        fi: "Saatte: nykytilan ja puutteiden kartoituksen.",
        en: "You receive: a current-state and gap assessment.",
        es: "Resultado: análisis de la situación actual y de las carencias.",
      },
    },
    {
      number: "02",
      title: {
        fi: "Selkeä muutoskartta",
        en: "A clear change roadmap",
        es: "Una hoja de ruta clara",
      },
      text: {
        fi: "Muutamme havainnot priorisoiduksi suunnitelmaksi, jossa tehtävillä on vastuuhenkilöt ja aikataulu.",
        en: "We turn the findings into a prioritised plan with named owners and a timetable for delivery.",
        es: "Convertimos las conclusiones en un plan priorizado, con responsables y plazos definidos.",
      },
      deliverable: {
        fi: "Saatte: käytännön etenemissuunnitelman.",
        en: "You receive: a practical implementation plan.",
        es: "Resultado: un plan práctico de ejecución.",
      },
    },
    {
      number: "03",
      title: {
        fi: "Uudistus arkeen",
        en: "Make the change work",
        es: "Lleva el cambio a la práctica",
      },
      text: {
        fi: "Johdan sovittua toteutusta, sitoutan avainhenkilöt ja vien muutokset toimintatapoihin yhdessä organisaationne kanssa.",
        en: "I lead the agreed implementation, engage key stakeholders and embed the changes in working practices together with your organisation.",
        es: "Lidero la ejecución acordada, implico a las personas clave e integro los cambios en las prácticas de trabajo junto con su organización.",
      },
      deliverable: {
        fi: "Saatte: kokeneen muutoksen toteuttajan.",
        en: "You receive: an experienced change leader.",
        es: "Resultado: experiencia para dirigir la ejecución.",
      },
    },
  ],
  cta: {
    label: {
      fi: "Kartoitetaan yrityksenne muutostarpeet",
      en: "Assess your change needs",
      es: "Analicemos los cambios que necesita su empresa",
    },
    topic: "eu-aml",
  },
  sources: {
    summary: {
      fi: "Mitä EU:n AML-pakettiin kuuluu?",
      en: "What is in the EU AML package?",
      es: "¿Qué incluye el paquete europeo contra el blanqueo?",
    },
    intro: {
      fi: "EU-säädökset luovat yhteisen perustan. Suomen lainvalmistelu ja tekniset standardit täydentävät kokonaisuutta. Yrityksellenne olennaiset vaatimukset määräytyvät toiminnan ja riskien mukaan.",
      en: "EU legislation provides the common framework, complemented by Finnish legislative reforms and technical standards. The requirements relevant to your organisation depend on its activities and risks.",
      es: "La legislación de la UE establece el marco común, que se completa con la reforma legislativa finlandesa y las normas técnicas. Los requisitos relevantes para su empresa dependen de su actividad y sus riesgos.",
    },
    items: [
      {
        term: {
          fi: "AMLR – EU:n rahanpesuasetus",
          en: "AMLR – the EU Anti-Money Laundering Regulation",
          es: "AMLR – Reglamento europeo contra el blanqueo de capitales",
        },
        id: {
          fi: "Anti-Money Laundering Regulation · (EU) 2024/1624",
          en: "Anti-Money Laundering Regulation · (EU) 2024/1624",
          es: "Anti-Money Laundering Regulation · (UE) 2024/1624",
        },
        text: {
          fi: "Suoraan sovellettavat säännöt ilmoitusvelvollisille: muun muassa asiakkaan tunteminen, tosiasiallisten edunsaajien selvittäminen, riskienhallinta ja sisäiset menettelyt. Pääasiallinen soveltamispäivä on 10.7.2027.",
          en: "Directly applicable rules for obliged entities, including customer due diligence, beneficial ownership identification, risk management and internal procedures. The main application date is 10 July 2027.",
          es: "Normas directamente aplicables a los sujetos obligados, entre ellas la diligencia debida con respecto al cliente, la identificación del titular real, la gestión de riesgos y los procedimientos internos. Su aplicación general comienza el 10 de julio de 2027.",
        },
        link: {
          label: {
            fi: "Lue AMLR",
            en: "Read the AMLR",
            es: "Consultar el AMLR",
          },
          href: {
            fi: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj?locale=fi",
            en: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj?locale=en",
            es: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj?locale=es",
          },
        },
        idLang: {
          fi: "en",
          es: "en",
        },
      },
      {
        term: {
          fi: "AMLD6 – kuudes rahanpesudirektiivi",
          en: "AMLD6 – the sixth Anti-Money Laundering Directive",
          es: "AMLD6 – Sexta Directiva contra el blanqueo de capitales",
        },
        id: {
          fi: "Anti-Money Laundering Directive · (EU) 2024/1640",
          en: "Anti-Money Laundering Directive · (EU) 2024/1640",
          es: "Anti-Money Laundering Directive · (UE) 2024/1640",
        },
        text: {
          fi: "Ohjaa jäsenvaltioiden kansallisia järjestelyjä, kuten valvontaa, rahanpesun selvittelykeskuksia ja rekistereitä. Direktiivi pannaan täytäntöön kansallisella lainsäädännöllä.",
          en: "Governs national arrangements in Member States, including supervision, financial intelligence units and registers. The Directive is implemented through national legislation.",
          es: "Regula los sistemas nacionales de los Estados miembros, como la supervisión, las unidades de inteligencia financiera y los registros. Se transpone mediante legislación nacional.",
        },
        link: {
          label: {
            fi: "Lue AMLD6",
            en: "Read AMLD6",
            es: "Consultar la AMLD6",
          },
          href: {
            fi: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj?locale=fi",
            en: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj?locale=en",
            es: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj?locale=es",
          },
        },
        idLang: {
          fi: "en",
          es: "en",
        },
      },
      {
        term: {
          fi: "AMLA-asetus – EU:n rahanpesuntorjuntaviranomainen",
          en: "AMLA Regulation – the EU Anti-Money Laundering Authority",
          es: "Reglamento de la AMLA – Autoridad europea contra el blanqueo",
        },
        id: {
          fi: "Anti-Money Laundering Authority · (EU) 2024/1620",
          en: "Anti-Money Laundering Authority · (EU) 2024/1620",
          es: "Anti-Money Laundering Authority · (UE) 2024/1620",
        },
        text: {
          fi: "Perustaa AMLA-viranomaisen ja määrittelee sen tehtävät. AMLA yhtenäistää valvontaa, valmistelee teknisiä standardeja ja valvoo suoraan erikseen valittavia finanssialan toimijoita.",
          en: "Establishes AMLA and its responsibilities. AMLA promotes consistent supervision, develops technical standards and directly supervises selected financial sector entities.",
          es: "Crea la AMLA y define sus funciones. La autoridad promueve una supervisión coherente, elabora normas técnicas y supervisa directamente a determinadas entidades del sector financiero.",
        },
        link: {
          label: {
            fi: "Lue AMLA-asetus",
            en: "Read the AMLA Regulation",
            es: "Consultar el Reglamento de la AMLA",
          },
          href: {
            fi: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj?locale=fi",
            en: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj?locale=en",
            es: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj?locale=es",
          },
        },
        idLang: {
          fi: "en",
          es: "en",
        },
      },
      {
        term: {
          fi: "Suomen rahanpesulain uudistus – HE 105/2026",
          en: "Finnish AML law reform – Government Proposal HE 105/2026",
          es: "Reforma de la ley finlandesa contra el blanqueo – HE 105/2026",
        },
        id: {
          fi: "Hallituksen esitys kansallisesta lainsäädännöstä",
          en: "Government proposal for national legislation",
          es: "Propuesta del Gobierno sobre legislación nacional",
        },
        text: {
          fi: "Suomen hallituksen esitys täydentää EU-asetuksia ja toimeenpanee direktiivin kansallisia vaatimuksia. Esitys on annettu eduskunnalle 4.6.2026.",
          en: "The Finnish Government proposal supplements the EU regulations and implements the directive’s national requirements. It was submitted to Parliament on 4 June 2026.",
          es: "El proyecto del Gobierno finlandés complementa los reglamentos europeos y transpone los requisitos nacionales de la directiva. Se presentó al Parlamento el 4 de junio de 2026.",
        },
        link: {
          label: {
            fi: "Seuraa kansallista lainvalmistelua",
            en: "Follow the Finnish legislative reform",
            es: "Seguir la reforma legislativa finlandesa",
          },
          href: "https://valtioneuvosto.fi/hanke?tunnus=VM053:00/2024",
        },
      },
      {
        term: {
          fi: "RTS: AMLR:n 28 artiklan 1 kohta – asiakkaan tunteminen",
          en: "RTS under AMLR Article 28(1) – customer due diligence",
          es: "RTS del artículo 28(1) del AMLR – diligencia debida con respecto al cliente",
        },
        id: {
          fi: "Regulatory Technical Standards · AMLR 28(1)",
          en: "Regulatory Technical Standards · AMLR 28(1)",
          es: "Normas técnicas de regulación · AMLR 28(1)",
        },
        text: {
          fi: "Valmisteilla olevat tekniset sääntelystandardit täsmentävät asiakkaan tuntemisessa tarvittavia tietoja ja asiakirjoja sekä yksinkertaistettuja ja tehostettuja tuntemistoimia. Ne voivat vaikuttaa eri toimialojen ilmoitusvelvollisten asiakastietoihin, prosesseihin ja järjestelmävaatimuksiin riskiperusteisesti.",
          en: "The draft regulatory technical standards specify customer due diligence information and documentation, as well as simplified and enhanced due diligence measures. They may affect customer data, processes and system requirements for obliged entities across sectors on a risk-based basis.",
          es: "El proyecto de normas técnicas de regulación concreta la información y documentación necesarias para la diligencia debida, así como las medidas simplificadas y reforzadas. Puede afectar a los datos de clientes, los procesos y los requisitos de los sistemas de sujetos obligados de distintos sectores, conforme a un enfoque basado en el riesgo.",
        },
        wide: true,
        idLang: {
          fi: "en",
        },
      },
    ],
  },
};
