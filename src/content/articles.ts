// Content of the website. Text is written once per language: { fi, en, es }.
// See src/content/types.ts for the conventions (line breaks and *emphasis*).

import type { Localized } from './types';

type ArticleBlock =
  | { type: 'p'; text: Localized }
  | { type: 'h2'; text: Localized }
  | { type: 'ul'; items: Localized[] }
  | { type: 'link'; href: string; text: Localized };

export interface Article {
  /** Last part of the address: /kirjoituksia/<slug>/ */
  slug: string;
  /** ISO date of the original publication. */
  published: string;
  dateLabel: Localized;
  /** Address on the previous WordPress site; used for permanent redirects (see next.config.ts). */
  legacyPath: string;
  title: Localized;
  description: Localized;
  blocks: ArticleBlock[];
}

/** Fixed labels of the article pages. */
export const articleUi: {
  back: Localized;
  archive: Localized;
  note: Localized;
  contact: Localized;
  published: Localized;
} = {
  back: {
    fi: "Kaikki kirjoitukset",
    en: "All articles",
    es: "Todos los artículos",
  },
  archive: {
    fi: "KIRJOITUSARKISTO",
    en: "ARTICLE ARCHIVE",
    es: "ARCHIVO DE ARTÍCULOS",
  },
  note: {
    fi: "Vuonna 2024 julkaistu kirjoitus. Teksti on säilytetty alkuperäisessä muodossaan, eikä sitä ole päivitetty kuvaamaan nykyistä sääntelyä.",
    en: "An article originally published in 2024. The original text has been retained and has not been updated to reflect current regulation. This is an English translation.",
    es: "Artículo publicado originalmente en 2024. Se conserva el texto original, sin actualizarlo a la normativa vigente. Esta es una traducción al español.",
  },
  contact: {
    fi: "Keskustellaan yrityksenne tarpeista",
    en: "Let’s discuss your business needs",
    es: "Hablemos de las necesidades de su empresa",
  },
  published: {
    fi: "Julkaistu",
    en: "Published",
    es: "Publicado",
  },
};

/**
 * Archived articles, originally published in 2024. The Finnish text is the
 * original; the English and Spanish texts are translations.
 */
export const articles: Article[] = [
  {
    slug: "tiedatko-kuka-yritykseesi-investoi",
    published: "2024-09-11",
    dateLabel: {
      fi: "11.9.2024",
      en: "11 September 2024",
      es: "11 de septiembre de 2024",
    },
    legacyPath: "/2024/09/11/tiedatko-kuka-yritykseesi-investoi/",
    title: {
      fi: "Tiedätkö, kuka yritykseesi investoi?",
      en: "Do you know who is investing in your company?",
      es: "¿Sabe quién invierte en su empresa?",
    },
    description: {
      fi: "Vuonna 2024 julkaistu kirjoitus sijoittajien taustaselvitysten merkityksestä pk-yritysten pakoteriskien hallinnassa.",
      en: "A 2024 article on investor background checks and sanctions risk management for small and medium-sized businesses.",
      es: "Artículo de 2024 sobre la verificación de antecedentes de inversores y la gestión del riesgo de sanciones en las pymes.",
    },
    blocks: [
      {
        type: "p",
        text: {
          fi: "Tämän blogikirjoituksen tarkoituksena on nostaa pk-yritysten tietoisuutta siitä, kuinka tärkeää on tarkistaa yritykseesi investoivan kumppanin taustat huolellisesti.",
          en: "The purpose of this article is to raise awareness among small and medium-sized businesses of the importance of carefully checking the background of a partner investing in your company.",
          es: "El objetivo de este artículo es concienciar a las pymes sobre la importancia de comprobar cuidadosamente los antecedentes de un socio que invierte en su empresa.",
        },
      },
      {
        type: "p",
        text: {
          fi: "EU ja Yhdysvallat ovat asettaneet laajoja pakotteita Venäjän hyökkäyssodan seurauksena. Näiden pakotteiden tavoitteena on heikentää Venäjän kykyä jatkaa raakaa sotaa Ukrainassa ja eristää maa kansainvälisestä taloudesta.",
          en: "The EU and the United States have imposed extensive sanctions following Russia’s war of aggression. These sanctions aim to weaken Russia’s ability to continue its brutal war in Ukraine and to isolate the country from the international economy.",
          es: "La UE y Estados Unidos han impuesto amplias sanciones a raíz de la guerra de agresión de Rusia. Estas sanciones pretenden debilitar la capacidad de Rusia para continuar su brutal guerra en Ucrania y aislar al país de la economía internacional.",
        },
      },
      {
        type: "p",
        text: {
          fi: "Mutta miten nämä pakotteet voivat vaikuttaa sinun yritykseesi?",
          en: "But how could these sanctions affect your company?",
          es: "Pero ¿cómo pueden afectar estas sanciones a su empresa?",
        },
      },
      {
        type: "p",
        text: {
          fi: "Haluan antaa esimerkin suomalaisesta pk-yrityksestä, johon pakotteet iskivät yllättäen ja vakavin seurauksin. Yritys oli jo pitkään etsinyt rahoittajaa investointeja varten, kunnes vihdoin löytyi pohjoismainen sijoittaja, joka vaikutti lupaavalta. Sijoittajasta tuli yrityksen osakkeenomistaja, ja kaikki näytti sujuvan hyvin – kunnes pankki alkoi kysellä tarkempia tietoja uudesta osakkeenomistajasta. Pian tämän jälkeen suomalainen pankki päätti irtisanoa yrityksen kaikki pankkipalvelut.",
          en: "I would like to share an example of a Finnish SME that was unexpectedly affected by sanctions, with serious consequences. The company had been seeking funding for investments for a long time when it finally found a promising Nordic investor. The investor became a shareholder, and everything seemed to be going well — until the bank started asking for more detailed information about the new shareholder. Soon afterwards, the Finnish bank decided to terminate all of the company’s banking services.",
          es: "Quiero compartir el ejemplo de una pyme finlandesa a la que las sanciones afectaron de forma inesperada y con graves consecuencias. La empresa llevaba mucho tiempo buscando financiación para invertir, hasta que finalmente encontró un inversor nórdico que parecía prometedor. El inversor se convirtió en accionista y todo parecía ir bien, hasta que el banco empezó a pedir información más detallada sobre el nuevo accionista. Poco después, el banco finlandés decidió cancelar todos los servicios bancarios de la empresa.",
        },
      },
      {
        type: "p",
        text: {
          fi: "Mistä tässä tapauksessa oli kyse?",
          en: "What was behind this situation?",
          es: "¿Qué había detrás de esta situación?",
        },
      },
      {
        type: "p",
        text: {
          fi: "Kyse oli suomalaisen pk-yrityksen uudesta osakkeenomistajasta ja hänen aikaisemmista yritysyhteyksistään Venäjällä. Tämän seurauksena suomalainen yritys menetti kyvyn hoitaa juoksevia kulujaan, ja joutui vakavaan kriisiin. Tässä tapauksessa oikeanlainen apu pelasti yrityksen, mutta jokainen pk-yritys ei ole yhtä onnekas. Yksi virhe taustaselvityksissä voi johtaa vakaviin ongelmiin ja jopa konkurssiin.",
          en: "The issue concerned the Finnish SME’s new shareholder and their previous business connections in Russia. As a result, the company lost the ability to pay its running costs and faced a serious crisis. In this case, the right help saved the business, but not every SME is as fortunate. One mistake in background checks can lead to serious problems and even bankruptcy.",
          es: "El problema estaba relacionado con el nuevo accionista de la pyme finlandesa y sus anteriores vínculos empresariales en Rusia. Como consecuencia, la empresa perdió la capacidad de atender sus gastos corrientes y entró en una grave crisis. En este caso, la ayuda adecuada salvó a la empresa, pero no todas las pymes tienen la misma suerte. Un solo error al comprobar los antecedentes puede provocar problemas graves e incluso la quiebra.",
        },
      },
      {
        type: "p",
        text: {
          fi: "Lisääntyvien pakotteiden aikana on yhä tärkeämpää varmistaa, että yritykseesi investoivien tahojen taustat tutkitaan perusteellisesti. Oulasvirta Consulting auttaa pk-yrityksiä hallitsemaan riskejä ja välttämään pakotteisiin tai talousrikollisuuteen liittyvät sudenkuopat. Ota yhteyttä, niin varmistetaan yhdessä, että liiketoimintasi on suojattu odottamattomilta riskeiltä!",
          en: "As sanctions increase, it becomes ever more important to thoroughly investigate the background of those investing in your company. Oulasvirta Consulting helps SMEs manage risks and avoid pitfalls relating to sanctions and financial crime. Get in touch so we can work together to protect your business against unexpected risks.",
          es: "A medida que aumentan las sanciones, resulta cada vez más importante investigar a fondo los antecedentes de quienes invierten en su empresa. Oulasvirta Consulting ayuda a las pymes a gestionar los riesgos y evitar problemas relacionados con las sanciones y la delincuencia financiera. Póngase en contacto para que trabajemos juntos en la protección de su negocio frente a riesgos inesperados.",
        },
      },
      {
        type: "p",
        text: {
          fi: "OulasvirtaConsulting #Investoinnit #PkYritys #Pakotteet #Venäjä #Riskienhallinta #Sijoittajat #Talousrikollisuus #Osakkeenomistajat #Liiketoimintariski #Taustaselvitys",
          en: "OulasvirtaConsulting #Investment #SMEs #Sanctions #Russia #RiskManagement #Investors #FinancialCrime #Shareholders #BusinessRisk #BackgroundChecks",
          es: "OulasvirtaConsulting #Inversiones #Pymes #Sanciones #Rusia #GestiónDeRiesgos #Inversores #DelincuenciaFinanciera #Accionistas #RiesgoEmpresarial #VerificaciónDeAntecedentes",
        },
      },
      {
        type: "p",
        text: {
          fi: "Taustaa: EU on tähän mennessä asettanut 14 pakotepakettia Venäjää vastaan Ukrainan hyökkäyssodan seurauksena. Näihin paketteihin sisältyy laaja valikoima taloudellisia ja teknologisia rajoituksia, joiden tarkoituksena on heikentää Venäjän taloudellisia ja sotilaallisia kykyjä. Lisää tietoa löydät:",
          en: "Background: at the time of writing, the EU had adopted 14 sanctions packages against Russia in response to its war of aggression against Ukraine. These packages include a broad range of economic and technological restrictions intended to weaken Russia’s economic and military capabilities. Further information:",
          es: "Contexto: en el momento de la publicación, la UE había adoptado 14 paquetes de sanciones contra Rusia en respuesta a su guerra de agresión contra Ucrania. Estos paquetes incluyen numerosas restricciones económicas y tecnológicas destinadas a debilitar la capacidad económica y militar de Rusia. Más información:",
        },
      },
      {
        type: "link",
        href: "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/sanctions-adopted-following-russias-military-aggression-against-ukraine_en",
        text: {
          fi: "Venäjän hyökkäyssodan johdosta asetetut pakotteet – Euroopan komissio",
          en: "Sanctions adopted following Russia’s military aggression against Ukraine – European Commission",
          es: "Sanciones adoptadas tras la agresión militar de Rusia contra Ucrania – Comisión Europea",
        },
      },
    ],
  },
  {
    slug: "rahanpesun-estaminen",
    published: "2024-08-14",
    dateLabel: {
      fi: "14.8.2024",
      en: "14 August 2024",
      es: "14 de agosto de 2024",
    },
    legacyPath: "/2024/08/14/rahanpesun-estaminen/",
    title: {
      fi: "Rahanpesun estäminen",
      en: "Preventing money laundering",
      es: "Prevención del blanqueo de capitales",
    },
    description: {
      fi: "Vuonna 2024 julkaistu kirjoitus korkean riskin kolmansista maista, asiakkaan tuntemisesta ja riskiperusteisesta rahanpesun estämisestä.",
      en: "A 2024 article on high-risk third countries, customer due diligence and a risk-based approach to preventing money laundering.",
      es: "Artículo de 2024 sobre terceros países de alto riesgo, diligencia debida y prevención del blanqueo de capitales basada en el riesgo.",
    },
    blocks: [
      {
        type: "p",
        text: {
          fi: "Muutama vuosi sitten en olisi arvannut, että voisin innostua ammatillisesti aiheesta rahanpesun ja terrorismin rahoituksen estäminen, mutta tässä sitä nyt ollaan😊 Ensimmäinen rahanpesun estämisen artikkelini käsittelee sellaista sanahirviötä kuin HR3C, joka tarkoittaa korkean riskin kolmansia maita rahanpesun ja terrorismin rahoituksen estämisen (AML) näkövinkkelistä.",
          en: "A few years ago, I would not have imagined becoming professionally enthusiastic about preventing money laundering and terrorist financing, but here we are 😊 My first article on anti-money laundering looks at the rather unwieldy abbreviation HR3C: high-risk third countries from an anti-money laundering and counter-terrorist financing perspective.",
          es: "Hace unos años no habría imaginado entusiasmarme profesionalmente con la prevención del blanqueo de capitales y de la financiación del terrorismo, pero aquí estamos 😊 Mi primer artículo sobre esta materia trata de una sigla poco intuitiva: HR3C, que hace referencia a terceros países de alto riesgo desde la perspectiva de la prevención del blanqueo de capitales y de la financiación del terrorismo.",
        },
      },
      {
        type: "p",
        text: {
          fi: "Rahanpesulain mukaan pankeilla on ollut velvoite noudattaa tehostettua asiakkaan tuntemismenettelyjä tilanteessa, jossa pankin asiakas lähettää tai vastaanottaa vaikka maksun Euroopan komission listaamaan korkean riskin maahan (HR3C).",
          en: "Under anti-money laundering law, banks have been required to apply enhanced customer due diligence when, for example, a customer sends a payment to or receives a payment from a high-risk third country listed by the European Commission.",
          es: "Según la legislación contra el blanqueo de capitales, los bancos han tenido la obligación de aplicar medidas reforzadas de diligencia debida cuando, por ejemplo, un cliente envía o recibe un pago hacia o desde un tercer país de alto riesgo incluido en la lista de la Comisión Europea.",
        },
      },
      {
        type: "h2",
        text: {
          fi: "Komission muutokset",
          en: "Changes by the Commission",
          es: "Cambios de la Comisión",
        },
      },
      {
        type: "p",
        text: {
          fi: "Mitä sitten tapahtui elokuussa 2023, kun Komissio lisäsi uusia maita tähän HR3C listaan?",
          en: "What happened in August 2023 when the Commission added new countries to the HR3C list?",
          es: "¿Qué ocurrió en agosto de 2023, cuando la Comisión añadió nuevos países a la lista de terceros países de alto riesgo?",
        },
      },
      {
        type: "p",
        text: {
          fi: "Syntyi varsin suuri haaste siitä, miten hallita kasvavia volyymejä asiakasmaksujen tuntemisvelvoitteiden osalta 🤔. Annan esimerkin: Dubai on suomalaisten matkailijoiden kestosuosikki lämpimänä lomanviettopaikkana. Kun komissio lisäsi yhdistyneet arabiemiirikunnat HR3C listalle, käytännössä se tarkoitti, että valvottavilla oli velvoite tutkia turistimatkoilla tehtyjä ‘kahvikuppimaksuja’.",
          en: "This created a significant challenge in managing the growing volume of customer payment due diligence 🤔. Here is an example: Dubai is a long-standing favourite among Finnish travellers seeking a warm holiday destination. When the Commission added the United Arab Emirates to the HR3C list, this meant in practice that supervised entities were required to examine ‘cup-of-coffee payments’ made on holidays.",
          es: "Surgió un reto considerable: cómo gestionar el creciente volumen de obligaciones de diligencia debida relacionadas con los pagos de los clientes 🤔. Un ejemplo: Dubái es un destino habitual de los turistas finlandeses que buscan unas vacaciones al sol. Cuando la Comisión añadió los Emiratos Árabes Unidos a la lista de terceros países de alto riesgo, en la práctica las entidades supervisadas tuvieron que examinar incluso los pagos de un café durante las vacaciones.",
        },
      },
      {
        type: "p",
        text: {
          fi: "Voin sanoa, että asiakkaiden turistimatkoilla tehdyt maksut eivät ole niitä AML riskejä, joihin kenenkään tulisi käyttää aikaa tai varsinkaan tehostettua asiakkaan tuntemismenettelyä, joka on varsin laaja ja raskas prosessi.",
          en: "In my view, customers’ holiday payments are not the AML risks on which anyone should be spending their time, particularly through enhanced customer due diligence, which is a broad and demanding process.",
          es: "En mi opinión, los pagos que hacen los clientes durante sus vacaciones no son los riesgos de blanqueo de capitales a los que se debería dedicar tiempo y, mucho menos, aplicar una diligencia debida reforzada, que es un proceso amplio y exigente.",
        },
      },
      {
        type: "h2",
        text: {
          fi: "Finanssivalvojan seminaari",
          en: "The Financial Supervisory Authority’s seminar",
          es: "Seminario de la Autoridad de Supervisión Financiera",
        },
      },
      {
        type: "p",
        text: {
          fi: "Kuuntelin Finanssivalvojan seminaaria aiheesta AML ja sain iloksi huomata, että Finanssivalvoja antoi hyviä ohjenuoria pankeille miten toimia jatkossa HR3C transaktioiden kanssa.",
          en: "I attended a seminar on AML held by the Finnish Financial Supervisory Authority and was pleased to hear useful guidance for banks on how to handle HR3C transactions going forward.",
          es: "Asistí a un seminario sobre prevención del blanqueo de capitales de la Autoridad de Supervisión Financiera de Finlandia y me alegró escuchar orientaciones útiles para los bancos sobre cómo gestionar en adelante las operaciones con terceros países de alto riesgo.",
        },
      },
      {
        type: "ul",
        items: [
          {
            fi: "Pankeille annettiin mahdollisuus toimia riskiperusteisesti. Tämä on erittäin hyvä, jotta voimme keskittää pankkien resurssit oikeaan kohtaan 🎯.",
            en: "Banks were given the opportunity to take a risk-based approach. This is very welcome, as it allows us to focus banks’ resources where they are needed 🎯.",
            es: "Se dio a los bancos la posibilidad de adoptar un enfoque basado en el riesgo. Es una medida muy positiva para centrar sus recursos donde realmente se necesitan 🎯.",
          },
          {
            fi: "Fiva antoi alustavan armahduksen siitä, että jos maksut ovat ymmärrettäviä, pieniä ja lyhytkestoisia, pankit voisivat jatkossa toimia riskiperusteisesti eli ilman tehostettua tuntemismenettelyä (EDD).",
            en: "The FIN-FSA indicated a preliminary concession: where payments are understandable, small and limited to a short period, banks could in future take a risk-based approach without enhanced due diligence (EDD).",
            es: "La autoridad finlandesa indicó una flexibilización preliminar: si los pagos son comprensibles, pequeños y se limitan a un periodo breve, los bancos podrían adoptar un enfoque basado en el riesgo sin aplicar diligencia debida reforzada (EDD).",
          },
          {
            fi: "Yksittäinen euromääräisesti pieni maksu lyhyellä aikavälillä ei muodostaisi heti velvoitetta EDD menettelyyn.",
            en: "A single low-value payment over a short period would not immediately trigger a requirement for EDD.",
            es: "Un pago aislado de importe reducido en un periodo breve no generaría automáticamente la obligación de aplicar diligencia debida reforzada.",
          },
        ],
      },
      {
        type: "p",
        text: {
          fi: "Otan ilolla vastaan nämä alustavat Fivan linjaukset, jotka ovat oikeasuuntaisia. Tämän asian äärellä kun olemme kaikki yhtenä rintamana estämässä rahanpesua.",
          en: "I welcome these preliminary FIN-FSA positions as a step in the right direction. After all, we are all working together to prevent money laundering.",
          es: "Celebro estas orientaciones preliminares de la autoridad finlandesa, que van en la dirección correcta. Al fin y al cabo, todos trabajamos juntos para prevenir el blanqueo de capitales.",
        },
      },
    ],
  },
];
