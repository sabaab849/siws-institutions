import quoteMarkLeft from '../../assets/decor/quote-mark-left.svg';
import quoteMarkRight from '../../assets/decor/quote-mark-right.svg';
import { Container } from '../../components/layout/Container/Container';
import { heritage } from '../../data/heritage';
import { cx } from '../../utils/cx';
import { withLineBreaks } from '../../utils/withLineBreaks';
import styles from './HeritageStatement.module.css';

export function HeritageStatement() {
  return (
    <section className={styles.heritage} aria-label="Society motto">
      <Container className={styles.inner}>
        <div className={styles.topRow}>
          <p className={styles.label}>{heritage.label}</p>
          <img
            className={cx(styles.mark, styles.markLeft)}
            src={quoteMarkLeft}
            alt=""
            width={92}
            height={160}
          />
          <img
            className={cx(styles.mark, styles.markRight)}
            src={quoteMarkRight}
            alt=""
            width={91}
            height={160}
          />
        </div>
        <div className={cx(styles.rule, styles.topRule)} aria-hidden="true" />

        <div className={styles.twoCol}>
          <blockquote className={styles.quote} lang="sa-Latn">
            <p>{withLineBreaks(heritage.quoteLines)}</p>
          </blockquote>
          <span className={styles.colDivider} aria-hidden="true" />
          <p className={styles.translation}>{withLineBreaks(heritage.translationLines)}</p>
        </div>

        <div className={styles.rule} aria-hidden="true" />
        <div className={styles.footerRow}>
          <p className={styles.faded}>{heritage.footerLabel}</p>
          <ul role="list" className={styles.pillars}>
            {heritage.pillars.map((pillar) => (
              <li key={pillar}>
                <span className={styles.faded}>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
