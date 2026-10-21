import styles from './LegacyPath.module.css';

const STEPS = [
  { label: 'Foundation', note: 'A primary school at Shivaji Park' },
  { label: 'Growth', note: 'More stages, more students' },
  { label: 'Institutions', note: 'Pre-school to postgraduate study' },
  { label: 'Community', note: 'Generations of Mumbai families' },
];

/** The Society's journey in four steps, above the milestones. */
export function LegacyPath() {
  return (
    <ol role="list" className={styles.path}>
      {STEPS.map((step, index) => (
        <li key={step.label} className={styles.step}>
          <span className={styles.index} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={styles.label}>{step.label}</span>
          <span className={styles.note}>{step.note}</span>
        </li>
      ))}
    </ol>
  );
}
