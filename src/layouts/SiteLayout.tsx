import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SiteFooter } from '../components/layout/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader/SiteHeader';
import { prefersReducedMotion } from '../utils/motion';
import styles from './SiteLayout.module.css';

/**
 * Moving to another page starts it at the top, the way a new page load would.
 * An in-page anchor (`/contact#enquiry`) keeps its own scroll.
 */
function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
}

export function SiteLayout() {
  useScrollToTop();

  return (
    <>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
