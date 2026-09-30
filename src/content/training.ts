// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { StaticImageData } from 'next/image';
import isannointiliittoPhoto from '@/assets/images/koulutus-isannointiliitto.jpg';
import juristiliittoPhoto from '@/assets/images/koulutus-juristiliitto-2025.jpg';
import kesapaivatPhoto from '@/assets/images/koulutus-kesapaivat-2026.jpg';
import rahanpesupaivaPhoto from '@/assets/images/koulutus-rahanpesupaiva-2025.jpg';
import type { ContactCta, ExternalLink, Localized, SectionHeadingContent } from './types';

interface TrainingCard {
  /** Used by the stylesheet to position the crop of the photograph. */
  id: 'kesapaivat' | 'rahanpesupaiva' | 'isannointiliitto' | 'juristiliitto';
  image: StaticImageData;
  imageAlt: Localized;
  caption: Localized;
  title: Localized;
  text: Localized;
  link: ExternalLink;
}

export interface TrainingContent {
  heading: SectionHeadingContent;
  title: Localized;
  lead: Localized;
  text: Localized;
  cards: TrainingCard[];
  /** Text-only events without a photograph. */
  events: { eyebrow: Localized; title: Localized; text: Localized; link: ExternalLink }[];
  cta: { text: Localized; button: ContactCta };
}

export const training: TrainingContent = {
  heading: {
    eyebrow: {
      fi: "ESIINTYMISET JA KOULUTUKSET",
      en: "SPEAKING AND TRAINING",
      es: "PONENCIAS Y FORMACIÓN",
    },
    note: {
      fi: "Kokemusta eri toimialojen yleisöistä",
      en: "Experience with audiences across sectors",
      es: "Experiencia con públicos de distintos sectores",
    },
  },
  title: {
    fi: "Sääntely ymmärrettäväksi.\n*Osaaminen arkeen.*",
    en: "Making regulation understandable.\n*Putting knowledge into practice.*",
    es: "Comprender la normativa.\n*Aplicar lo aprendido.*",
  },
  lead: {
    fi: "Olen vuosien varrella puhunut lukuisissa seminaareissa ja kouluttanut yritysten rahanpesun estämisen asiantuntijoita sisäisissä koulutuksissa. Yhdistän sääntelyosaamisen käytännön kokemukseen ja sovitan sisällön osallistujien työhön.",
    en: "Over the years, I have spoken at numerous seminars and delivered in-house training for companies’ AML specialists. I combine regulatory expertise with practical experience and tailor the content to participants’ work.",
    es: "A lo largo de los años he intervenido en numerosos seminarios e impartido formación interna a especialistas en prevención del blanqueo de capitales de distintas empresas. Combino el conocimiento normativo con la experiencia práctica y adapto los contenidos al trabajo de los participantes.",
  },
  text: {
    fi: "Alla muutamia esimerkkejä koulutuksista ja puheenvuoroista Isännöintiliiton jäsenille, tilintarkastajien kesäpäivillä ja AML-seminaareissa.",
    en: "Below are a few examples of training and talks for members of the Finnish Real Estate Management Federation, at auditors’ summer conferences and at AML seminars.",
    es: "A continuación se muestran algunos ejemplos de formación y ponencias para miembros de la Federación Finlandesa de Administración de Fincas, en jornadas de verano de auditores y en seminarios de prevención del blanqueo.",
  },
  cards: [
    {
      // Provenance: the date 28.8.2026 is visible on the presentation slide in the photograph; LinkedIn post published 31.8.2026.
      id: "kesapaivat",
      image: kesapaivatPhoto,
      imageAlt: {
        fi: "Katja Oulasvirta kouluttamassa Tilintarkastajien kesäpäivillä Turussa",
        en: "Katja Oulasvirta delivering training at the auditors’ summer conference in Turku",
        es: "Katja Oulasvirta impartiendo formación en las jornadas de verano de auditores en Turku",
      },
      caption: {
        fi: "Tilintarkastajien kesäpäivät · 28.8.2026",
        en: "Auditors’ summer conference · 28 August 2026",
        es: "Jornadas de verano de auditores · 28 de agosto de 2026",
      },
      title: {
        fi: "Tilintarkastajien kesäpäivät",
        en: "Auditors’ summer conference",
        es: "Jornadas de verano de auditores",
      },
      text: {
        fi: "Kouluttajana Turussa toista vuotta peräkkäin. Aiheina tosiasiallisten edunsaajien tunnistaminen, asiakkaan riskin arviointi ja pakotteiden huomioiminen tilintarkastajan työssä.",
        en: "Delivering training in Turku for the second consecutive year, covering beneficial ownership, customer risk assessment and sanctions compliance in auditors’ day-to-day work.",
        es: "Por segundo año consecutivo, impartí formación en Turku sobre la identificación de los titulares reales, la evaluación del riesgo del cliente y el cumplimiento de sanciones en el trabajo del auditor.",
      },
      link: {
        href: "https://www.linkedin.com/posts/katja-oulasvirta-8564631_tilintarkastus-rahanpesuntorjunta-aml-activity-7500104845719310337-qmju",
        label: {
          fi: "Tunnelmia koulutuksesta",
          en: "Highlights from the training",
          es: "Momentos de la formación",
        },
      },
    },
    {
      // Provenance: LinkedIn recap published 18.11.2025. The website shows the month only, not an independently verified event day.
      id: "rahanpesupaiva",
      image: rahanpesupaivaPhoto,
      imageAlt: {
        fi: "Katja Oulasvirta puhumassa Alma Insightin Rahanpesupäivässä",
        en: "Katja Oulasvirta speaking at Alma Insight’s AML Day",
        es: "Katja Oulasvirta interviniendo en la jornada de prevención del blanqueo de Alma Insight",
      },
      caption: {
        fi: "Rahanpesupäivä · marraskuu 2025",
        en: "AML Day · November 2025",
        es: "Jornada de prevención del blanqueo · noviembre de 2025",
      },
      title: {
        fi: "Rahanpesupäivä · Alma Insight",
        en: "AML Day · Alma Insight",
        es: "Jornada de prevención del blanqueo · Alma Insight",
      },
      text: {
        fi: "Puheenvuorot de-riskingistä ja rahanpesun estämisen riskiarviosta sekä osallistuminen päivän päättäneeseen paneelikeskusteluun. Keskiössä riskienhallinnan oikea mitoitus ja riskiarvion soveltaminen käytännössä.",
        en: "Talks on de-risking and AML risk assessments, followed by the closing panel discussion. The focus was on proportionate risk management and putting risk assessments into practice.",
        es: "Ponencias sobre de-risking y evaluación de riesgos de blanqueo, seguidas de la mesa redonda de clausura. El enfoque se centró en una gestión proporcionada del riesgo y en la aplicación práctica de las evaluaciones de riesgos.",
      },
      link: {
        href: "https://www.linkedin.com/posts/katja-oulasvirta-8564631_rahanpesup%C3%A4iv%C3%A4-almainsight-oulasvirtaconsulting-activity-7396550783581966336-MZ2h",
        label: {
          fi: "Tunnelmia seminaarista",
          en: "Highlights from the seminar",
          es: "Momentos del seminario",
        },
      },
    },
    {
      // Provenance: webinar held 3.6.2025.
      id: "isannointiliitto",
      image: isannointiliittoPhoto,
      imageAlt: {
        fi: "Katja Oulasvirta kouluttamassa Isännöintiliiton webinaarissa",
        en: "Katja Oulasvirta delivering a webinar for the Finnish Real Estate Management Federation",
        es: "Katja Oulasvirta impartiendo un seminario web de la Federación Finlandesa de Administración de Fincas",
      },
      caption: {
        fi: "Isännöintiliiton webinaari · 3.6.2025",
        en: "Isännöintiliitto webinar · 3 June 2025",
        es: "Seminario web de Isännöintiliitto · 3 de junio de 2025",
      },
      title: {
        fi: "Isännöintiliitto",
        en: "Finnish Real Estate Management Federation",
        es: "Federación Finlandesa de Administración de Fincas",
      },
      text: {
        fi: "Asiakkaan tunteminen ja pakotteiden noudattaminen isännöinnin näkökulmasta. Kesäkuun 2025 webinaari kokosi yli 130 alan osallistujaa.",
        en: "Customer due diligence and sanctions compliance in property management. The June 2025 webinar brought together more than 130 participants from the sector.",
        es: "Diligencia debida con respecto al cliente y cumplimiento de sanciones en la administración de fincas. El seminario web de junio de 2025 reunió a más de 130 participantes del sector.",
      },
      link: {
        href: "https://www.linkedin.com/posts/katja-oulasvirta-8564631_oulasvirtaconsulting-is%C3%A4nn%C3%B6intiliitto-activity-7335613785010753537-E8xb",
        label: {
          fi: "Tunnelmia koulutuksesta",
          en: "Highlights from the training",
          es: "Momentos de la formación",
        },
      },
    },
    {
      // Provenance: the event announcement and the same-day LinkedIn recap agree on 25.4.2025. Full-frame wide photograph selected by the owner.
      id: "juristiliitto",
      image: juristiliittoPhoto,
      imageAlt: {
        fi: "Katja Oulasvirta Juristiliiton koulutuksessa, seminaaritila ja kuvauskalusto etualalla",
        en: "Katja Oulasvirta speaking at a Finnish Lawyers’ Association training event, with the seminar room and camera equipment in the foreground",
        es: "Katja Oulasvirta en una formación de la Asociación Finlandesa de Juristas, con la sala y el equipo de grabación en primer plano",
      },
      caption: {
        fi: "Juristiliiton koulutus · 25.4.2025",
        en: "Finnish Lawyers’ Association training · 25 April 2025",
        es: "Formación de la Asociación Finlandesa de Juristas · 25 de abril de 2025",
      },
      title: {
        fi: "Rahanpesun estämisen erityiskysymykset",
        en: "Special issues in anti-money laundering",
        es: "Cuestiones específicas de prevención del blanqueo",
      },
      text: {
        fi: "Puheenjohtajana ja puhujana Juristiliiton koulutuksessa 25.4.2025. Omat puheenvuoroni käsittelivät de-riskingiä ja ilmoitusvelvollisten riskiarvioita.",
        en: "Chair and speaker at the Finnish Lawyers’ Association’s training event on 25 April 2025. My talks focused on de-risking and risk assessments for obliged entities.",
        es: "Moderadora y ponente en la formación de la Asociación Finlandesa de Juristas del 25 de abril de 2025. Mis intervenciones trataron sobre de-risking y evaluaciones de riesgos de los sujetos obligados.",
      },
      link: {
        href: "https://www.linkedin.com/posts/katja-oulasvirta-8564631_oulasvirtaconsulting-almainsight-almakoulutus-activity-7321515192322785281-SSKD",
        label: {
          fi: "Tutustu koulutuksen teemoihin",
          en: "Explore the training topics",
          es: "Consultar los temas de la formación",
        },
      },
    },
  ],
  // Provenance of the second event (Sijoitusakatemia, 28.11.2024): the date is visible on the slide in the photograph;
  // LinkedIn post published 29.11.2024. The close-up photo was removed at the owner's request, so only text and the source link are shown.
  events: [
    {
      eyebrow: {
        fi: "YRITYSTEN SISÄISET KOULUTUKSET",
        en: "IN-HOUSE TRAINING",
        es: "FORMACIÓN INTERNA EN EMPRESAS",
      },
      title: {
        fi: "LähiTapiolan AML-päivät",
        en: "LähiTapiola AML training days",
        es: "Jornadas de prevención del blanqueo de LähiTapiola",
      },
      text: {
        fi: "Kouluttajana AML-päivillä rahanpesun estämisen asiantuntijoille. Keskustelua vaativista käytännön kysymyksistä ja AML-osaamisen syventämisestä.",
        en: "Training for anti-money laundering specialists at AML training days, exploring demanding practical questions and deepening their AML expertise.",
        es: "Formación para especialistas en prevención del blanqueo, con análisis de cuestiones prácticas complejas y profundización de sus conocimientos.",
      },
      link: {
        href: "https://www.linkedin.com/posts/katja-oulasvirta-8564631_aml-kyc-compliance-activity-7233753283708821504-3qe2",
        label: {
          fi: "Lue koulutuspäivästä",
          en: "Read about the training day",
          es: "Leer sobre la jornada",
        },
      },
    },
    {
      eyebrow: {
        fi: "SIJOITUSAKATEMIA · 28.11.2024",
        en: "SIJOITUSAKATEMIA · 28 NOVEMBER 2024",
        es: "SIJOITUSAKATEMIA · 28 DE NOVIEMBRE DE 2024",
      },
      title: {
        fi: "AML & talousrikollisuuden torjunta",
        en: "AML & financial crime prevention",
        es: "Prevención del blanqueo y de la delincuencia financiera",
      },
      text: {
        fi: "Puheenvuoro pakotteiden uhista yritystoiminnalle Sijoitusakatemian 10-vuotisjuhlaseminaarissa. Käytännön tapausesimerkki havainnollisti pakotteiden huomioimista muun muassa investointitilanteissa.",
        en: "A talk on the business risks posed by sanctions at Sijoitusakatemia’s 10th anniversary seminar. A practical case study illustrated how to account for sanctions, including in investment decisions.",
        es: "Ponencia sobre los riesgos de las sanciones para las empresas en el seminario del décimo aniversario de Sijoitusakatemia. Un caso práctico ilustró cómo tener en cuenta las sanciones, también en las decisiones de inversión.",
      },
      link: {
        href: "https://www.linkedin.com/posts/katja-oulasvirta-8564631_sijoitusakatemia-aml-pakotteet-activity-7268170154012758016-mrIL",
        label: {
          fi: "Tunnelmia seminaarista",
          en: "Highlights from the seminar",
          es: "Momentos del seminario",
        },
      },
    },
  ],
  cta: {
    text: {
      fi: "Tarvitseeko henkilöstönne, johtonne tai tapahtumanne asiantuntevan kouluttajan?",
      en: "Looking for an expert trainer for your team, management or event?",
      es: "¿Necesita un formador especializado para su equipo, su dirección o su evento?",
    },
    button: {
      label: {
        fi: "Suunnitellaan koulutus yhdessä",
        en: "Let’s plan your training",
        es: "Planifiquemos su formación",
      },
      topic: "training",
    },
  },
};
