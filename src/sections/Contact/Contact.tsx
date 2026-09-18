import arrowRight from '../../assets/icons/arrow-right-lg.svg';
import { LinkList } from '../../components/content/LinkList/LinkList';
import { Container } from '../../components/layout/Container/Container';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { Icon } from '../../components/ui/Icon/Icon';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { contact } from '../../data/contact';
import { site } from '../../data/site';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <Container className={styles.inner}>
        <div className={styles.header}>
          <SectionTitle id="contact-title" size="xl" className={styles.title}>
            {contact.title}
          </SectionTitle>
          <span className={styles.arrow}>
            <Icon src={arrowRight} size={37} />
          </span>
        </div>

        <div className={styles.details}>
          <div className={styles.info}>
            <Eyebrow as="h3">{contact.inquiriesHeading}</Eyebrow>
            <address className={styles.office}>
              <p className={styles.officeName}>{contact.office}</p>
              <p className={styles.address}>{site.address}</p>
              <p className={styles.reach}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                {' · '}
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </p>
            </address>
          </div>
          <LinkList className={styles.column} {...contact.resources} />
          <LinkList className={styles.column} {...contact.disclosures} />
        </div>
      </Container>
    </section>
  );
}
