import logo from '../../../assets/siws-logo.png';
import { footer } from '../../../data/footer';
import { site } from '../../../data/site';
import { LinkList } from '../../content/LinkList/LinkList';
import { Container } from '../Container/Container';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <a href="#top" className={styles.lockup}>
              <span className={styles.mark}>
                <img className={styles.logo} src={logo} alt="" width={28} height={28} />
              </span>
              <span className={styles.name}>{footer.name}</span>
            </a>
            <p className={styles.address}>
              {site.name} · {site.address} ·{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <nav aria-label="Footer" className={styles.columns}>
            {footer.columns.map((column) => (
              <LinkList
                key={column.heading}
                variant="inverse"
                headingAs="h2"
                heading={column.heading}
                links={column.links}
              />
            ))}
          </nav>
        </div>

        <div className={styles.base}>
          <p>{footer.copyright}</p>
          <ul role="list" className={styles.baseLinks}>
            {footer.baseLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
