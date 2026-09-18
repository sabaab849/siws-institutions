import { Stat } from '../../components/content/Stat/Stat';
import { Container } from '../../components/layout/Container/Container';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { impact } from '../../data/impact';
import styles from './Impact.module.css';

export function Impact() {
  return (
    <section className={styles.impact} aria-labelledby="impact-title">
      <Container className={styles.inner}>
        <SectionHeader
          eyebrow={impact.eyebrow}
          eyebrowTone="muted"
          title={impact.title}
          titleId="impact-title"
          tone="inverse"
        />
        <dl className={styles.stats}>
          {impact.stats.map((stat) => (
            <Stat key={stat.label} variant="impact" className={styles.stat} {...stat} />
          ))}
        </dl>
      </Container>
    </section>
  );
}
