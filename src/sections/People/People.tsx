import { Link } from 'react-router-dom';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { founders, officeBearers, trustees } from '../../data/people';
import styles from './People.module.css';

/** Three faces from each group, enough to introduce the people without a directory. */
const GROUPS = [
  { label: 'Founders', to: '/about/our-story#founders', people: founders.slice(0, 3) },
  { label: 'Office Bearers', to: '/about/our-story#office-bearers', people: officeBearers.slice(0, 3) },
  { label: 'Trustees', to: '/about/our-story#trustees', people: trustees.slice(0, 3) },
];

export function People() {
  return (
    <PageSection
      tone="bg"
      eyebrow="Our People"
      title="The People Behind SIWS"
      lead="The Society is led by its founders' successors: the office bearers and trustees who hold its institutions in trust."
      action={
        <ButtonLink to="/about/our-story#founders" variant="link">
          Meet the people
        </ButtonLink>
      }
    >
      <div className={styles.groups}>
        {GROUPS.map((group) => (
          <article key={group.label} className={styles.group}>
            <ul role="list" className={styles.faces}>
              {group.people.map((person) => (
                <li key={person.name} className={styles.face}>
                  {person.photo ? (
                    <img
                      className={styles.photo}
                      src={person.photo}
                      alt={person.name}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
            <h3 className={styles.groupLabel}>
              <Link to={group.to}>{group.label}</Link>
            </h3>
            <p className={styles.groupNames}>
              {group.people.map((person) => person.name).join(' · ')}
            </p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
