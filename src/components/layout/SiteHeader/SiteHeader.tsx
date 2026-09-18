import { useEffect, useState } from 'react';
import { primaryNav, site } from '../../../data/site';
import { Button } from '../../ui/Button/Button';
import { BrandLockup } from '../BrandLockup/BrandLockup';
import styles from './SiteHeader.module.css';

const DESKTOP_QUERY = '(min-width: 1024px)';
const NAV_ID = 'primary-navigation';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <BrandLockup />

        <nav
          id={NAV_ID}
          aria-label="Primary"
          className={styles.nav}
          data-open={menuOpen || undefined}
        >
          <ul role="list" className={styles.navList}>
            {primaryNav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.menuSignIn}>
              <Button href={site.signInHref} onClick={closeMenu}>
                Sign In
              </Button>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={site.signInHref} className={styles.barSignIn}>
            Sign In
          </Button>
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
      </div>
    </header>
  );
}
