// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { ContactTopic, Localized } from './types';

export interface ContactContent {
  eyebrow: Localized;
  title: Localized;
  lead: Localized;
  text: Localized;
  form: {
    title: Localized;
    intro: Localized;
    labels: {
      name: Localized;
      company: Localized;
      optional: Localized;
      email: Localized;
      topic: Localized;
      message: Localized;
      honeypot: Localized;
    };
    hint: Localized;
    topics: { value: ContactTopic; label: Localized }[];
    privacy: { text: Localized; linkLabel: Localized };
    submit: Localized;
    /** Alternative: open a pre-filled message in the visitor's own e-mail program. */
    emailOption: { label: Localized; note: Localized };
    /** Status messages announced to assistive technology. */
    messages: { pending: Localized; success: Localized; invalid: Localized };
  };
}

export const contact: ContactContent = {
  eyebrow: {
    fi: "SOVITAAN SEURAAVA ASKEL",
    en: "LET'S AGREE THE NEXT STEP",
    es: "ACORDEMOS EL SIGUIENTE PASO",
  },
  title: {
    fi: "Aloitetaan\n*yhdestä kysymyksestä.*",
    en: "Let's start\n*with one question.*",
    es: "Empecemos\n*con una pregunta.*",
  },
  lead: {
    fi: "Koko projektia ei tarvitse määritellä etukäteen. Voimme aloittaa yhdestä kysymyksestä, dokumentin kommentoinnista tai rajatusta asiantuntijakeskustelusta.",
    en: "You don’t need to define a whole project in advance. We can start with one question, a document review or a focused consultation.",
    es: "No hace falta definir un proyecto completo de antemano. Podemos empezar con una pregunta, la revisión de un documento o una consulta concreta.",
  },
  text: {
    fi: "Sovimme työn sisällön, laajuuden ja hinnan ennen aloittamista. Yhteydenotto ei sido toimeksiantoon, ja jatkosta päätetään erikseen.",
    en: "We agree the work, scope and fee before starting. An enquiry does not commit you to an engagement, and any further work is agreed separately.",
    es: "Acordamos el contenido, el alcance y los honorarios antes de comenzar. La consulta inicial no obliga a contratar servicios, y cualquier trabajo posterior se acuerda por separado.",
  },
  form: {
    title: {
      fi: "Kertokaa, mikä askarruttaa",
      en: "Tell me what’s on your mind",
      es: "Cuénteme qué necesita resolver",
    },
    intro: {
      fi: "Lyhyt kuvaus tilanteestanne riittää. Vastaan henkilökohtaisesti. Lähetyksen yhteydessä voitte saada roskapostin estävän tarkistuksen.",
      en: "A short description of your situation is enough. I will reply personally. You may be asked to complete a spam-prevention check when sending.",
      es: "Basta con una breve descripción de su situación. Le responderé personalmente. Al enviar, es posible que se le solicite completar una comprobación contra el spam.",
    },
    labels: {
      name: {
        fi: "Nimi",
        en: "Name",
        es: "Nombre",
      },
      company: {
        fi: "Yritys",
        en: "Company",
        es: "Empresa",
      },
      email: {
        fi: "Sähköposti",
        en: "Email",
        es: "Correo electrónico",
      },
      topic: {
        fi: "Mistä haluaisitte keskustella?",
        en: "What would you like to discuss?",
        es: "¿Sobre qué le gustaría hablar?",
      },
      message: {
        fi: "Viesti",
        en: "Message",
        es: "Mensaje",
      },
      honeypot: {
        fi: "Jätä tämä kenttä tyhjäksi",
        en: "Leave this field empty",
        es: "Deje este campo vacío",
      },
      optional: {
        fi: "(vapaaehtoinen)",
        en: "(optional)",
        es: "(opcional)",
      },
    },
    hint: {
      fi: "Kertokaa tarpeestanne yleisellä tasolla. Älkää lähettäkö lomakkeella asiakkaiden henkilötietoja tai luottamuksellisia asiakirjoja.",
      en: "Describe your needs in general terms. Please do not include your clients’ personal data or confidential documents in this form.",
      es: "Describa sus necesidades de forma general. No incluya datos personales de sus clientes ni documentos confidenciales en este formulario.",
    },
    topics: [
      {
        value: "question",
        label: {
          fi: "Yksittäinen kysymys tai muu tarve",
          en: "A specific question or another need",
          es: "Una pregunta concreta u otra necesidad",
        },
      },
      {
        value: "eu-aml",
        label: {
          fi: "EU AML -uudistukseen valmistautuminen",
          en: "Preparing for the EU AML reform",
          es: "Preparación para la reforma europea contra el blanqueo",
        },
      },
      {
        value: "partnership",
        label: {
          fi: "Oma asiantuntija / AML-kumppanuus",
          en: "Your expert / ongoing AML support",
          es: "Su especialista / colaboración continua en prevención del blanqueo",
        },
      },
      {
        value: "mlro",
        label: {
          fi: "MLRO ja muutosjohtaminen",
          en: "MLRO and change leadership",
          es: "MLRO y gestión del cambio",
        },
      },
      {
        value: "sanctions",
        label: {
          fi: "Pakotteet ja riskienhallinta",
          en: "Sanctions and risk management",
          es: "Sanciones y gestión de riesgos",
        },
      },
      {
        value: "training",
        label: {
          fi: "Koulutus tai puheenvuoro",
          en: "Training or a speaking engagement",
          es: "Formación o ponencia",
        },
      },
    ],
    privacy: {
      text: {
        fi: "Käytän antamianne tietoja yhteydenottoonne vastaamiseen. Viestin välittämiseen käytetään FormSubmit-palvelua.",
        en: "I use the information you provide to respond to your enquiry. Messages are forwarded through FormSubmit.",
        es: "Utilizo los datos facilitados para responder a su consulta. Los mensajes se envían a través de FormSubmit.",
      },
      linkLabel: {
        fi: "Tietosuojatiedot",
        en: "Privacy information",
        es: "Información de privacidad",
      },
    },
    submit: {
      fi: "Lähetä viesti",
      en: "Send message",
      es: "Enviar mensaje",
    },
    emailOption: {
      label: {
        fi: "Avaa viesti sähköpostiohjelmassa",
        en: "Open message in your email app",
        es: "Abrir el mensaje en su aplicación de correo",
      },
      note: {
        fi: "Viesti avautuu luonnoksena. Lähettäkää se sähköpostiohjelmastanne.",
        en: "The message opens as a draft. Send it from your email app.",
        es: "El mensaje se abrirá como borrador. Envíelo desde su aplicación de correo.",
      },
    },
    messages: {
      pending: {
        fi: "Viimeistelkää lähetys avautuvalla vahvistussivulla.",
        en: "Complete the submission on the confirmation page that opens.",
        es: "Complete el envío en la página de confirmación que se abre.",
      },
      success: {
        fi: "Kiitos yhteydenotostanne! Palaan asiaan sähköpostitse.",
        en: "Thank you for getting in touch. I will reply by email.",
        es: "Gracias por ponerse en contacto. Le responderé por correo electrónico.",
      },
      invalid: {
        fi: "Tarkistakaa nimi, sähköpostiosoite ja viesti ennen lähettämistä.",
        en: "Please check your name, email address and message before sending.",
        es: "Compruebe su nombre, correo electrónico y mensaje antes de enviar.",
      },
    },
  },
};
