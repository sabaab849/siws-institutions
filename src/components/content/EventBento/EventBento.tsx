import type { CSSProperties } from 'react';
import type { CampusEvent } from '../../../data/events';
import { useInViewOnce } from '../../../hooks/useInViewOnce';
import { cx } from '../../../utils/cx';
import { Picture } from '../../ui/Picture/Picture';
import styles from './EventBento.module.css';

type EventBentoProps = {
  events: CampusEvent[];
  className?: string;
};

/** Cards rise in a few at a time rather than all at once. */
const STAGGER_MS = 70;
const STAGGER_LIMIT = 6;

/**
 * Events as a bento grid: each card's size comes from the event, the grid packs
 * them densely, and the tiles rise into place the first time the grid is
 * scrolled into view.
 */
export function EventBento({ events, className }: EventBentoProps) {
  const [gridRef, revealed] = useInViewOnce<HTMLUListElement>();

  return (
    <ul
      ref={gridRef}
      role="list"
      className={cx(styles.grid, className)}
      data-revealed={revealed || undefined}
    >
      {events.map((event, index) => (
        <li
          // Two institutions can keep the same day, so the position settles ties.
          key={`${event.institution} ${event.title} ${index}`}
          className={styles.item}
          data-size={event.size ?? 'small'}
          data-photo={event.image ? '' : undefined}
          style={
            {
              '--reveal-delay': `${Math.min(index, STAGGER_LIMIT) * STAGGER_MS}ms`,
              '--photo-position': event.image?.position,
            } as CSSProperties
          }
        >
          <figure className={styles.tile}>
            {event.image ? (
              <Picture
                className={styles.image}
                src={event.image.src}
                mobile={{ src: event.image.mobile, width: 640, fullWidth: 1024 }}
                mobileSizes="100vw"
                alt={event.image.alt}
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <figcaption className={styles.caption}>
              <p className={styles.meta}>
                <span className={styles.institution}>{event.institution}</span>
                {event.date ? <span className={styles.date}>{event.date}</span> : null}
              </p>
              <h3 className={styles.title}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
