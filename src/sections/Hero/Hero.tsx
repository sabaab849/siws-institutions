import illustration from '../../assets/hero-illustration.svg';
import { QuoteBlock } from '../../components/content/QuoteBlock/QuoteBlock';
import { Stat } from '../../components/content/Stat/Stat';
import { Container } from '../../components/layout/Container/Container';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { hero } from '../../data/hero';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { withLineBreaks } from '../../utils/withLineBreaks';
import styles from './Hero.module.css';

export function Hero() {
  // All four figures start together, once the row (both rows on phones) is well on screen.
  const [statsRef, statsInView] = useInViewOnce<HTMLDListElement>('0px 0px -25% 0px');

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.body}>
        <div className={styles.copy}>
          <Eyebrow variant="overline">{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title" className={styles.title}>
            {withLineBreaks(hero.titleLines)}
          </h1>
          <p className={styles.intro}>{hero.intro}</p>
          <QuoteBlock
            className={styles.quote}
            quote={hero.quote}
            translation={hero.translation}
            lang="sa-Latn"
          />
        </div>

        <div className={styles.art}>
          <img
            className={styles.illustration}
            src={illustration}
            alt=""
            width={606}
            height={377}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </Container>

      <div className={styles.statsBand}>
        <Container>
          <dl ref={statsRef} className={styles.stats}>
            {hero.stats.map((stat) => (
              <Stat
                key={stat.label}
                variant="hero"
                value={stat.value}
                label={stat.label}
                motion={{ effect: stat.effect, active: statsInView }}
              />
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
