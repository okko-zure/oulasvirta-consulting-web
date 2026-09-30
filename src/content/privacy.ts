// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { Locale, Localized } from './types';

/** A paragraph is plain text or a link on a line of its own. */
type PrivacyParagraph = string | { link: { href: string; label: string } };

interface PrivacySection {
  heading: Localized;
  /**
   * Paragraphs are listed per language on purpose: the translations of the
   * notice do not split every section into the same number of paragraphs.
   */
  paragraphs: Record<Locale, PrivacyParagraph[]>;
}

export interface PrivacyContent {
  title: Localized;
  description: Localized;
  back: Localized;
  eyebrow: Localized;
  updated: Localized;
  sections: PrivacySection[];
}

export const privacy: PrivacyContent = {
  title: {
    fi: "Tietosuoja",
    en: "Privacy",
    es: "Privacidad",
  },
  description: {
    fi: "Oulasvirta Consultingin yhteydenottolomakkeen ja verkkosivuston tietosuojatiedot.",
    en: "Privacy information for Oulasvirta Consulting's contact form and website.",
    es: "Información de privacidad del formulario de contacto y del sitio web de Oulasvirta Consulting.",
  },
  back: {
    fi: "Takaisin etusivulle",
    en: "Back to home",
    es: "Volver al inicio",
  },
  eyebrow: {
    fi: "TIETOSUOJA",
    en: "PRIVACY",
    es: "PRIVACIDAD",
  },
  updated: {
    fi: "Päivitetty 28.9.2026",
    en: "Updated 28 September 2026",
    es: "Actualizado el 28 de septiembre de 2026",
  },
  sections: [
    {
      heading: {
        fi: "Rekisterinpitäjä",
        en: "Controller",
        es: "Responsable",
      },
      paragraphs: {
        fi: [
          "Rekisterinpitäjä on SK-Monitoimialat Oy, jonka aputoiminimi on Oulasvirta Consulting (Y-tunnus 3019497-7). Yhteyshenkilö tietosuoja-asioissa on Katja Oulasvirta.",
          "Sähköposti: katja@oulasvirta.com",
        ],
        en: [
          "The controller is SK-Monitoimialat Oy, operating under the auxiliary business name Oulasvirta Consulting (Business ID 3019497-7). The contact person for privacy matters is Katja Oulasvirta.",
          "Email: katja@oulasvirta.com",
        ],
        es: [
          "El responsable es SK-Monitoimialat Oy, que opera con el nombre comercial auxiliar Oulasvirta Consulting (Business ID 3019497-7). La persona de contacto para asuntos de privacidad es Katja Oulasvirta.",
          "Correo electrónico: katja@oulasvirta.com",
        ],
      },
    },
    {
      heading: {
        fi: "Mihin tietoja käytetään",
        en: "How information is used",
        es: "Uso de la información",
      },
      paragraphs: {
        fi: [
          "Käytän yhteydenottolomakkeella annettuja tietoja yhteydenottoon vastaamiseen, mahdollisen yhteistyön arviointiin ja sovittujen jatkotoimien valmistelemiseen. Sivuston teknisiä tietoja voidaan käsitellä palvelun turvallisuuden ja roskapostin torjunnan vuoksi.",
        ],
        en: [
          "Information submitted through the contact form is used to respond to enquiries, assess possible cooperation and prepare agreed next steps. Technical information may be processed to keep the service secure and prevent spam.",
        ],
        es: [
          "La información enviada mediante el formulario se utiliza para responder consultas, valorar una posible colaboración y preparar los pasos acordados. También puede tratarse información técnica para mantener el servicio seguro y evitar spam.",
        ],
      },
    },
    {
      heading: {
        fi: "Mitä tietoja käsitellään",
        en: "Information processed",
        es: "Datos tratados",
      },
      paragraphs: {
        fi: [
          "Lomakkeella voidaan käsitellä nimeä, sähköpostiosoitetta, yrityksen nimeä, viestin aihetta, viestin sisältöä ja lomakkeen kielivalintaa. FormSubmit-viestinvälityspalvelu ja sivuston tekninen infrastruktuuri voivat käsitellä lisäksi yhteydenoton teknisiä tietoja.",
          "Älä lähetä lomakkeella asiakkaiden henkilötietoja, erityisiä henkilötietoryhmiä, luottamuksellisia asiakirjoja tai muuta salassa pidettävää aineistoa.",
        ],
        en: [
          "The form may process your name, email address, company, topic, message and language selection. FormSubmit and the site's technical infrastructure may also process technical information connected with the enquiry.",
          "Please do not send customer personal data, special categories of personal data, confidential documents or other protected material through the form.",
        ],
        es: [
          "El formulario puede tratar su nombre, correo electrónico, empresa, asunto, mensaje e idioma. FormSubmit y la infraestructura técnica del sitio también pueden tratar información técnica relacionada con la consulta.",
          "No envíe mediante el formulario datos personales de clientes, categorías especiales de datos, documentos confidenciales ni otra información protegida.",
        ],
      },
    },
    {
      heading: {
        fi: "Käsittelyn oikeusperuste",
        en: "Legal basis",
        es: "Base jurídica",
      },
      paragraphs: {
        fi: [
          "Käsittely perustuu tietosuoja-asetuksen 6 artiklan 1 kohdan f alakohdan mukaiseen oikeutettuun etuun: yhteydenottojen vastaanottamiseen, niihin vastaamiseen ja palvelun turvalliseen ylläpitoon. Jos yhteydenotto johtaa sopimuksen valmisteluun, oikeusperusteena voi olla myös 6 artiklan 1 kohdan b alakohta.",
        ],
        en: [
          "Processing is based on Article 6(1)(f) of the GDPR, our legitimate interest in receiving and answering enquiries and maintaining a secure service. Where an enquiry leads to steps before entering into a contract, Article 6(1)(b) may also apply.",
        ],
        es: [
          "El tratamiento se basa en el interés legítimo previsto en el artículo 6.1.f del RGPD: recibir y responder consultas y mantener un servicio seguro. Si la consulta da lugar a medidas precontractuales, también puede aplicarse el artículo 6.1.b.",
        ],
      },
    },
    {
      heading: {
        fi: "Vastaanottajat ja palveluntarjoajat",
        en: "Recipients and service providers",
        es: "Destinatarios y proveedores",
      },
      paragraphs: {
        fi: [
          "Lomakeviestit välitetään FormSubmit-palvelun kautta Katja Oulasvirran sähköpostiin. Sivuston teknisestä ylläpidosta ja sisällön toimittamisesta vastaavat palveluntarjoajat käsittelevät tietoja vain omien tehtäviensä edellyttämässä laajuudessa.",
          "FormSubmitin ajantasaiset tietosuojaehdot löytyvät palveluntarjoajan omalta sivulta. Palveluntarjoajan mahdolliset käsittelypaikat, siirtomekanismit ja säilytysajat määräytyvät sen ajantasaisten ehtojen mukaan.",
          {
            link: {
              href: "https://formsubmit.co/privacy.pdf",
              label: "FormSubmitin tietosuojatiedot",
            },
          },
        ],
        en: [
          "Form messages are forwarded through FormSubmit to Katja Oulasvirta's email. Technical service providers that host and deliver the site may process information only to the extent required for their services.",
          "FormSubmit's current privacy terms govern its processing locations, transfer mechanisms and retention periods.",
          {
            link: {
              href: "https://formsubmit.co/privacy.pdf",
              label: "FormSubmit privacy information",
            },
          },
        ],
        es: [
          "Los mensajes se envían a través de FormSubmit al correo de Katja Oulasvirta. Los proveedores técnicos que alojan y entregan el sitio pueden tratar información únicamente en la medida necesaria para sus servicios.",
          "Las condiciones de privacidad vigentes de FormSubmit determinan sus lugares de tratamiento, mecanismos de transferencia y plazos de conservación.",
          {
            link: {
              href: "https://formsubmit.co/privacy.pdf",
              label: "Información de privacidad de FormSubmit",
            },
          },
        ],
      },
    },
    {
      heading: {
        fi: "Säilytysaika",
        en: "Retention",
        es: "Conservación",
      },
      paragraphs: {
        fi: [
          "Säilytän yhteydenoton tiedot enintään 12 kuukautta yhteydenoton päättymisestä, ellei pidempi säilytys ole tarpeen sopimuksen, lakisääteisen velvoitteen tai oikeusvaateen hoitamiseksi. FormSubmitin oma säilytysaika määräytyy sen ajantasaisten ehtojen mukaan.",
        ],
        en: [
          "Enquiry information is retained for no more than 12 months after the enquiry is closed, unless a longer period is needed for a contract, legal obligation or legal claim. FormSubmit's own retention period is governed by its current terms.",
        ],
        es: [
          "La información de la consulta se conserva como máximo 12 meses después de cerrarla, salvo que sea necesario conservarla durante más tiempo por un contrato, una obligación legal o una reclamación. El plazo propio de FormSubmit se rige por sus condiciones vigentes.",
        ],
      },
    },
    {
      heading: {
        fi: "Evästeet ja seuranta",
        en: "Cookies and analytics",
        es: "Cookies y analítica",
      },
      paragraphs: {
        fi: [
          "Sivusto ei käytä analytiikka- tai markkinointievästeitä. Sivuston tekninen palveluntarjoaja voi käyttää palvelun toiminnan kannalta välttämättömiä teknisiä ratkaisuja.",
        ],
        en: [
          "The site does not use analytics or marketing cookies. The technical service provider may use strictly necessary technical measures to operate the service.",
        ],
        es: [
          "El sitio no utiliza cookies de analítica ni de marketing. El proveedor técnico puede utilizar medidas estrictamente necesarias para prestar el servicio.",
        ],
      },
    },
    {
      heading: {
        fi: "Rekisteröidyn oikeudet",
        en: "Your rights",
        es: "Sus derechos",
      },
      paragraphs: {
        fi: [
          "Voit pyytää pääsyä omiin tietoihisi, tietojen oikaisua tai poistamista, käsittelyn rajoittamista sekä vastustaa käsittelyä. Lähetä pyyntö osoitteeseen katja@oulasvirta.com. Vastaamme ilman aiheetonta viivytystä.",
          "Sinulla on oikeus tehdä valitus Suomen tietosuojavaltuutetulle, jos katsot, että henkilötietojasi käsitellään lainvastaisesti.",
        ],
        en: [
          "You may request access to your data, rectification or erasure, restriction of processing, and object to processing. Send requests to katja@oulasvirta.com. You also have the right to complain to the Finnish Data Protection Ombudsman.",
        ],
        es: [
          "Puede solicitar acceso a sus datos, rectificación o supresión, limitación del tratamiento y oponerse al tratamiento. Envíe sus solicitudes a katja@oulasvirta.com. También puede presentar una reclamación ante la autoridad finlandesa de protección de datos.",
        ],
      },
    },
    {
      heading: {
        fi: "Muutokset tähän tietosuojatietoon",
        en: "Changes",
        es: "Cambios",
      },
      paragraphs: {
        fi: [
          "Päivitän tätä tietosuojatietoa, jos sivuston toiminta, palveluntarjoajat tai henkilötietojen käsittely muuttuvat.",
        ],
        en: [
          "This notice may be updated when the site's functionality, service providers or processing activities change.",
        ],
        es: [
          "Esta información puede actualizarse si cambian la funcionalidad del sitio, los proveedores o las actividades de tratamiento.",
        ],
      },
    },
  ],
};
