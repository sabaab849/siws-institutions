import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { primaryNav, site } from '../../../data/site';
import { BrandLockup } from '../BrandLockup/BrandLockup';
import styles from './SiteHeader.module.css';

const DESKTOP_QUERY = '(min-width: 1024px)';
const NAV_ID = 'primary-navigation';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const unlockPage = useRef<(() => void) | null>(null);

  // Below 1024px the open menu covers the page: the page stops scrolling and
  // leaves the tab order until the menu closes.
  useEffect(() => {
    const header = headerRef.current;
    if (!menuOpen || !header) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    const page = [...(header.parentElement?.children ?? [])].filter(
      (element): element is HTMLElement => element !== header && element instanceof HTMLElement,
    );
    page.forEach((element) => (element.inert = true));
    const unlock = () => {
      root.style.overflow = previousOverflow;
      page.forEach((element) => (element.inert = false));
      unlockPage.current = null;
    };
    unlockPage.current = unlock;

    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      unlock();
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  // Releases the page at once (effects run after the click), so a link's own
  // jump to its section isn't blocked by the scroll lock or `inert`.
  const closeMenu = () => {
    unlockPage.current?.();
    setMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.bar}>
        <BrandLockup className={styles.lockup} />

        <nav
          id={NAV_ID}
          aria-label="Primary"
          className={styles.nav}
          data-open={menuOpen || undefined}
        >
          <ul role="list" className={styles.navList}>
            {primaryNav.map((link, index) => (
              <li key={link.href} style={{ '--item': index } as CSSProperties}>
                <a href={link.href} className={styles.navLink} onClick={closeMenu}>
                  <span className={styles.navIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu only: the society's contact details, one tap away */}
          <p className={styles.menuContact}>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-controls={NAV_ID}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
