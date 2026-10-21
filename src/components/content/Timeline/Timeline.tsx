import styles from './Timeline.module.css';

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

type TimelineProps = {
  entries: TimelineEntry[];
};

/**
 * The Society's milestones as a vertical, year-led list: the year in its own
 * column, the rule and its marker in the next, and the milestone in the third.
 */
export function Timeline({ entries }: TimelineProps) {
  return (
    <ol role="list" className={styles.timeline}>
      {entries.map((entry) => (
        <li key={entry.year} className={styles.entry}>
          <p className={styles.year}>{entry.year}</p>
          <span className={styles.axis} aria-hidden="true">
            <span className={styles.dot} />
          </span>
          <div className={styles.body}>
            {/* The page hero is the h1 and the list carries no heading, so these are h2 */}
            <h2 className={styles.title}>{entry.title}</h2>
            <p className={styles.description}>{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
