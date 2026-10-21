import { Link } from 'react-router-dom';
import logo from '../../../assets/siws-logo.png';
import { MailIcon, MapPinIcon, PhoneIcon } from '../../icons/FooterIcons';
import { footer } from '../../../data/footer';
import { site } from '../../../data/site';
import { Container } from '../Container/Container';
import styles from './SiteFooter.module.css';

/**
 * Three bands: the Society and where to go next, then how to reach it and the
 * systems it runs, then the legal line.
 */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link to="/" className={styles.lockup}>
              <span className={styles.mark}>
                <img className={styles.logo} src={logo} alt="" width={28} height={28} />
              </span>
              <span className={styles.name}>{footer.name}</span>
            </Link>
            <p className={styles.description}>{footer.description}</p>

            <nav className={styles.socialBlock} aria-labelledby="footer-social">
              <h2 className={styles.metaHeading} id="footer-social">
                {footer.social.heading}
              </h2>
              <ul role="list" className={styles.social}>
                {footer.social.accounts.map((account) => (
                  <li key={account.label}>
                    <a className={styles.chip} href={account.href} target="_blank" rel="noreferrer">
                      {account.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav aria-label="Footer" className={styles.columns}>
            {footer.columns.map((column) => (
              <div key={column.heading} className={styles.column}>
                <h2 className={styles.columnHeading}>{column.heading}</h2>
                <ul role="list" className={styles.columnLinks}>
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.meta}>
          <div className={styles.contact}>
            <h2 className={styles.metaHeading}>Connect</h2>
            <address className={styles.contactDetails}>
              <span className={styles.contactItem}>
                <MapPinIcon className={styles.contactIcon} />
                {site.address}
              </span>
              <a className={styles.contactItem} href={`mailto:${site.email}`}>
                <MailIcon className={styles.contactIcon} />
                {site.email}
              </a>
              <a className={styles.contactItem} href={`tel:${site.phone.replace(/\s/g, '')}`}>
                <PhoneIcon className={styles.contactIcon} />
                {site.phone}
              </a>
            </address>
          </div>

          {/* Each portal keeps its own sub-domain; the footer only points to it */}
          <nav className={styles.portals} aria-labelledby="footer-portals">
            <h2 className={styles.metaHeading} id="footer-portals">
              Portals
            </h2>
            <ul role="list" className={styles.portalsList}>
              {footer.portals.map((portal) => (
                <li key={portal.label}>
                  {portal.href ? (
                    <a className={styles.chip} href={portal.href} target="_blank" rel="noreferrer">
                      {portal.label}
                    </a>
                  ) : (
                    <span className={`${styles.chip} ${styles.chipPending}`}>{portal.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.base}>
          <p>{footer.copyright}</p>
          <ul role="list" className={styles.baseLinks}>
            {footer.baseLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
