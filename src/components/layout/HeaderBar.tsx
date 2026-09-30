'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './SiteHeader.module.css';

interface HeaderBarProps {
  /** Server-rendered pieces: only the open/closed state of the mobile menu needs the browser. */
  wordmark: ReactNode;
  navigation: ReactNode;
  navLabel: string;
  languageSwitch: ReactNode;
  menuLabel: string;
}

/**
 * The bar of the site header. This is one of only two Client Components of the
 * site: it owns the state of the mobile menu.
 *
 * Keyboard and screen reader behaviour: the button has aria-expanded and
 * aria-controls, Escape closes the menu and returns focus to the button, using
 * a link closes the menu, and growing the window resets it.
 */
export function HeaderBar({ wordmark, navigation, navLabel, languageSwitch, menuLabel }: HeaderBarProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const closeOnLink = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
    };
    nav.addEventListener('click', closeOnLink);
    return () => nav.removeEventListener('click', closeOnLink);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1201px)');
    const reset = () => setOpen(false);
    desktop.addEventListener('change', reset);
    return () => desktop.removeEventListener('change', reset);
  }, []);

  return (
    <div className={`wrap ${styles.headerInner}`}>
      {wordmark}
      <nav ref={navRef} id="main-nav" aria-label={navLabel} className={open ? `${styles.nav} ${styles.isOpen}` : styles.nav}>
        {navigation}
      </nav>
      <div className={styles.headerTools}>
        {languageSwitch}
        <button
          ref={buttonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {menuLabel} <span aria-hidden="true">☰</span>
        </button>
      </div>
    </div>
  );
}
