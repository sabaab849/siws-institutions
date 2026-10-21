import { ProfileCard, type Person } from '../ProfileCard/ProfileCard';
import styles from './ProfileGrid.module.css';

type ProfileGridProps = {
  people: Person[];
  /** `wide`: three across on desktop, for longer profiles. */
  columns?: 'default' | 'wide';
  /** 2 where the grid sits in a section with no heading of its own. */
  headingLevel?: 2 | 3;
};

/** Grid of profile cards: four across on desktop, two on tablet, one on phones. */
export function ProfileGrid({ people, columns = 'default', headingLevel }: ProfileGridProps) {
  return (
    <ul role="list" className={`${styles.grid} ${styles[columns]}`}>
      {people.map((person) => (
        <li key={person.name}>
          <ProfileCard person={person} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
