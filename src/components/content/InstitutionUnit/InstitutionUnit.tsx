import arrowUpRight from '../../../assets/icons/arrow-up-right-xs.svg';
import type { InstitutionUnit as InstitutionUnitContent } from '../../../data/institutionPages';
import { Icon } from '../../ui/Icon/Icon';
import styles from './InstitutionUnit.module.css';

type InstitutionUnitProps = {
  unit: InstitutionUnitContent;
};

/** One institution (or one stage of the school): photo, summary and key facts. */
export function InstitutionUnit({ unit }: InstitutionUnitProps) {
  const { name, summary, image, facts, website, phone, email } = unit;

  return (
    <article className={styles.unit}>
      {image ? (
        <img className={styles.image} src={image} alt="" loading="lazy" decoding="async" />
      ) : null}

      <div className={styles.body}>
        {/* The units sit under the hero with no section heading between */}
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.summary}>{summary}</p>

        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>

        {phone || email ? (
          <p className={styles.contact}>
            {phone ? <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a> : null}
            {phone && email ? <span aria-hidden="true"> · </span> : null}
            {email ? <a href={`mailto:${email}`}>{email}</a> : null}
          </p>
        ) : null}

        {website ? (
          <a className={styles.link} href={website} target="_blank" rel="noreferrer">
            Official website
            <Icon src={arrowUpRight} size={14} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
