import type { ReactNode } from 'react';
import { Container } from '../Container/Container';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import styles from './PageHero.module.css';

type PageHeroProps = {
  /** Small label above the title, usually the parent section ("About SIWS"). */
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional trailing content, e.g. buttons or a figure. */
  children?: ReactNode;
};

/** Opening band of every inner page: label, page title and a short introduction. */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <Container className={styles.inner}>
        <Eyebrow variant="spaced">{eyebrow}</Eyebrow>
        <h1 id="page-title" className={styles.title}>
          {title}
        </h1>
        {intro ? <p className={styles.intro}>{intro}</p> : null}
        {children}
      </Container>
    </section>
  );
}
