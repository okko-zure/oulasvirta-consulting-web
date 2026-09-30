import type { Localized } from './types';

/**
 * Small interface texts that are not part of a page section.
 * (Longer texts belong in the file of their section.)
 */
export const ui = {
  /** Announced by screen readers after every link that opens in a new tab. */
  opensInNewTab: {
    fi: 'avautuu uuteen välilehteen',
    en: 'opens in a new tab',
    es: 'se abre en una pestaña nueva',
  } satisfies Localized,
  notFound: {
    title: {
      fi: 'Sivua ei löytynyt',
      en: 'Page not found',
      es: 'Página no encontrada',
    } satisfies Localized,
    text: {
      fi: 'Hakemaasi sivua ei löytynyt tai se on siirretty.',
      en: 'The page you were looking for could not be found or has moved.',
      es: 'No se ha encontrado la página que busca o se ha movido.',
    } satisfies Localized,
    home: {
      fi: 'Etusivulle',
      en: 'Back to the home page',
      es: 'Volver al inicio',
    } satisfies Localized,
  },
} as const;
