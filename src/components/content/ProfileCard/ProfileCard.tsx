import { cx } from '../../../utils/cx';
import styles from './ProfileCard.module.css';

export interface Person {
  name: string;
  /** Designation held in the Society, e.g. "Hon. Gen. Secretary". */
  role: string;
  /** Department or function, used on the staff page. */
  meta?: string;
  bio?: string;
  /** Imported image; a monogram stands in where the Society has no photograph. */
  photo?: string;
}

type ProfileCardProps = {
  person: Person;
  /** `feature`: larger portrait for founders and the chairperson. */
  variant?: 'default' | 'feature';
  /** 2 where the grid sits in a section with no heading of its own. */
  headingLevel?: 2 | 3;
};

/** Initials for the monogram that stands in for a missing photograph. */
function initials(name: string) {
  const words = name.replace(/^(Shri|Smt|Dr|Prof)\.?\s*/i, '').split(/[\s.]+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

/** Photograph, name, designation and an optional short profile. */
export function ProfileCard({ person, variant = 'default', headingLevel = 3 }: ProfileCardProps) {
  const { name, role, meta, bio, photo } = person;
  const Name = `h${headingLevel}` as 'h2' | 'h3';

  return (
    <article className={cx(styles.card, styles[variant])}>
      <div className={styles.portrait}>
        {photo ? (
          <img className={styles.photo} src={photo} alt={name} loading="lazy" decoding="async" />
        ) : (
          <span className={styles.monogram} aria-hidden="true">
            {initials(name)}
          </span>
        )}
      </div>
      <div className={styles.text}>
        <Name className={styles.name}>{name}</Name>
        <p className={styles.role}>{role}</p>
        {meta ? <p className={styles.meta}>{meta}</p> : null}
        {bio ? <p className={styles.bio}>{bio}</p> : null}
      </div>
    </article>
  );
}
