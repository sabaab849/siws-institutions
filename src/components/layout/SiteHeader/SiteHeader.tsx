import { useEffect, useRef, useState, type FocusEvent, type PointerEvent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { primaryNav, type NavItem } from '../../../data/navigation';
import { site } from '../../../data/site';
import { BrandLockup } from '../BrandLockup/BrandLockup';
import styles from './SiteHeader.module.css';

/** Below this width the navigation moves into the drawer. */
const DESKTOP_QUERY = '(min-width: 1024px)';
const NAV_ID = 'primary-navigation';

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 12 8" aria-hidden="true">
      <path
        d="M1.5 2.5 6 6.5l4.5-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** True when the item or one of its children is the page being viewed. */
function isCurrent(item: NavItem, pathname: string) {
  const paths = [item.to, ...(item.children?.map((child) => child.to) ?? [])];
  return paths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const unlockPage = useRef<(() => void) | null>(null);
  const { pathname } = useLocation();

  // A new page closes the drawer and any open dropdown.
  useEffect(() => {
    setMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // In the drawer, the section holding the current page starts open.
  useEffect(() => {
    const current = primaryNav.find((item) => item.children && isCurrent(item, pathname));
    setExpanded(current?.label ?? null);
  }, [pathname]);

  // Below the desktop width the open drawer covers the page: the page stops
  // scrolling and leaves the tab order until the drawer closes.
  useEffect(() => {
    const header = headerRef.current;
    if (!menuOpen || !header) return;

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

    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      unlock();
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  // Escape closes whichever of the two is open.
  useEffect(() => {
    if (!menuOpen && !openMenu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      unlockPage.current?.();
      setMenuOpen(false);
      setOpenMenu(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, openMenu]);

  // Releases the page at once (effects run after the click), so a link's own
  // navigation isn't blocked by the scroll lock or `inert`.
  const closeMenu = () => {
    unlockPage.current?.();
    setMenuOpen(false);
  };

  // Mouse opens a dropdown on hover; touch follows the parent link instead.
  const onItemEnter = (label: string) => (event: PointerEvent<HTMLLIElement>) => {
    if (event.pointerType === 'touch') return;
    setOpenMenu(label);
  };

  // Keyboard: the dropdown stays open while the focus is inside it.
  const onItemBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.bar}>
        <BrandLockup className={styles.lockup} />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul role="list" className={styles.navList}>
            {primaryNav.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onPointerEnter={onItemEnter(item.label)}
                onPointerLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(item.label)}
                onBlur={onItemBlur}
              >
                <NavLink
                  to={item.to}
                  className={styles.navLink}
                  data-current={isCurrent(item, pathname) || undefined}
                  aria-haspopup={item.children ? true : undefined}
                  aria-expanded={item.children ? openMenu === item.label : undefined}
                >
                  {item.label}
                  {item.children ? <Chevron /> : null}
                </NavLink>

                {item.children ? (
                  <div className={styles.panel} data-open={openMenu === item.label || undefined}>
                    <ul role="list" className={styles.panelList}>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className={styles.panelLink}>
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
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

      {/* Drawer, below 1024px */}
      <nav
        id={NAV_ID}
        aria-label="Primary"
        className={styles.drawer}
        data-open={menuOpen || undefined}
      >
        <ul role="list" className={styles.drawerList}>
          {primaryNav.map((item) => {
            const isExpanded = expanded === item.label;
            return (
              <li key={item.label} className={styles.drawerItem}>
                <div className={styles.drawerRow}>
                  <NavLink
                    to={item.to}
                    className={styles.drawerLink}
                    data-current={isCurrent(item, pathname) || undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                  {item.children ? (
                    <button
                      type="button"
                      className={styles.drawerToggle}
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Hide' : 'Show'} ${item.label} pages`}
                      onClick={() => setExpanded(isExpanded ? null : item.label)}
                    >
                      <Chevron />
                    </button>
                  ) : null}
                </div>

                {item.children && isExpanded ? (
                  <ul role="list" className={styles.drawerChildren}>
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} className={styles.drawerChildLink} onClick={closeMenu}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        <p className={styles.menuContact}>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </nav>
    </header>
  );
}
