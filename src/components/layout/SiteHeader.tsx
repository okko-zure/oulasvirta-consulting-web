import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { SmartLink } from '@/components/ui/SmartLink';
import { navigation } from '@/content/navigation';
import { locales, type Locale, type Localized } from '@/content/types';
import { HeaderBar } from './HeaderBar';
import styles from './SiteHeader.module.css';
import { Wordmark } from './Wordmark';

interface SiteHeaderProps {
  locale: Locale;
  /** The current page in every language, for the language switch. */
  paths: Localized;
  /** "" on the home page, otherwise the address of the home page (anchors then lead there). */
  anchorBase: string;
}

/** Logo, main navigation, language switch and the button of the mobile menu. */
export function SiteHeader({ locale, paths, anchorBase }: SiteHeaderProps) {
  return (
    <header className={styles.siteHeader}>
      <HeaderBar
        wordmark={<Wordmark href={`${anchorBase}#alku`} label={navigation.homeLabel[locale]} />}
        navLabel={navigation.navLabel[locale]}
        navigation={
          <>
            {navigation.items.map((item) => (
              <SmartLink key={item.href} href={`${anchorBase}${item.href}`}>
                {item.label[locale]}
              </SmartLink>
            ))}
            <SmartLink
              className={styles.navContact}
              href={`${anchorBase}#yhteydenottolomake`}
              data-contact-topic={navigation.contact.topic}
            >
              <ArrowLabel>{navigation.contact.label[locale]}</ArrowLabel>
            </SmartLink>
          </>
        }
        languageSwitch={
          <div className={styles.languageSwitch} role="group" aria-label={navigation.languageLabel[locale]}>
            {locales.map((other) => (
              <a
                key={other}
                href={paths[other]}
                lang={other}
                hrefLang={other}
                aria-current={other === locale ? 'page' : undefined}
              >
                {other.toUpperCase()}
              </a>
            ))}
          </div>
        }
        menuLabel={navigation.menuLabel[locale]}
      />
    </header>
  );
}
