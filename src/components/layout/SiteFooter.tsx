import { ArrowLabel } from '@/components/ui/ArrowLabel';
import { Rich } from '@/components/ui/Rich';
import { SmartLink } from '@/components/ui/SmartLink';
import { footer } from '@/content/footer';
import { navigation } from '@/content/navigation';
import type { Locale } from '@/content/types';
import { privacyPath } from '@/lib/routes';
import styles from './SiteFooter.module.css';
import { Wordmark } from './Wordmark';

interface SiteFooterProps {
  locale: Locale;
  /** "" on the home page, otherwise the address of the home page. */
  anchorBase: string;
}

export function SiteFooter({ locale, anchorBase }: SiteFooterProps) {
  return (
    <footer className={styles.siteFooter}>
      <div className={`wrap ${styles.footerInner}`}>
        <Wordmark href={`${anchorBase}#alku`} label={navigation.homeLabel[locale]} variant="footer" />
        <p>
          <Rich text={footer.entity[locale]} />
        </p>
        <SmartLink href={privacyPath[locale]}>{footer.privacyLabel[locale]}</SmartLink>
        <SmartLink href={`${anchorBase}#alku`}>
          <ArrowLabel arrow="inline" symbol="↑">
            {footer.backToTop[locale]}
          </ArrowLabel>
        </SmartLink>
      </div>
      <div className={`wrap ${styles.footerMeta}`}>
        <span>{footer.copyright}</span>
        <span>{footer.tagline[locale]}</span>
      </div>
    </footer>
  );
}
