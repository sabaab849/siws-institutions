import { useEffect, useId, useRef, useState, type ComponentType, type CSSProperties } from 'react';
import { useInView } from '../../../hooks/useInView';
import { useInViewOnce } from '../../../hooks/useInViewOnce';
import { prefersReducedMotion } from '../../../utils/motion';
import type { IconProps } from '../../icons/MilestoneIcons';
import styles from './MilestoneSelector.module.css';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}

type MilestoneSelectorProps = {
  label: string;
  milestones: Milestone[];
  /** How long each milestone stays active during the one-off auto-progression. */
  stepMs?: number;
};

/** Icons enter one after another, left to right. */
const REVEAL_STAGGER_MS = 110;

/**
 * Row of selectable milestones. The first time the row is in view it steps
 * through every milestone once; hovering, clicking, focusing or scrolling the
 * row hands control to the reader and stops it for good.
 */
export function MilestoneSelector({ label, milestones, stepMs = 2800 }: MilestoneSelectorProps) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(() => !prefersReducedMotion());
  const [rootRef, inView] = useInView<HTMLDivElement>();
  const [listRef, revealed] = useInViewOnce<HTMLOListElement>();
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const labelId = useId();
  const last = milestones.length - 1;

  // Auto-progression: advances only while the row is on screen, and stops at the last milestone.
  useEffect(() => {
    if (!autoplay || !inView || !revealed || active >= last) return;
    const timer = window.setTimeout(() => setActive((index) => index + 1), stepMs);
    return () => window.clearTimeout(timer);
  }, [autoplay, inView, revealed, active, last, stepMs]);

  // On narrow screens the row scrolls; keep the active milestone in it.
  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    if (!list || !item || list.scrollWidth <= list.clientWidth) return;

    const padding = parseFloat(getComputedStyle(list).paddingLeft) || 0;
    const start = item.offsetLeft - padding;
    const end = item.offsetLeft + item.offsetWidth + padding;
    if (start >= list.scrollLeft && end <= list.scrollLeft + list.clientWidth) return;

    list.scrollTo({ left: start, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, [active, listRef]);

  const takeControl = () => setAutoplay(false);
  const select = (index: number) => {
    setAutoplay(false);
    setActive(index);
  };

  return (
    <div ref={rootRef} className={styles.selector}>
      <div className={styles.head}>
        <h3 id={labelId} className={styles.label}>
          {label}
        </h3>
        <span className={styles.labelRule} aria-hidden="true" />
      </div>

      <ol
        ref={listRef}
        role="list"
        className={styles.list}
        aria-labelledby={labelId}
        data-revealed={revealed || undefined}
        onPointerDown={takeControl}
        onWheel={takeControl}
      >
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          const isActive = index === active;
          const descriptionId = `${labelId}-description-${index}`;

          return (
            <li
              key={milestone.year}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={styles.item}
              style={{ '--reveal-delay': `${index * REVEAL_STAGGER_MS}ms` } as CSSProperties}
            >
              <button
                type="button"
                className={styles.milestone}
                data-active={isActive || undefined}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`${milestone.year}: ${milestone.title}`}
                aria-describedby={descriptionId}
                onClick={() => select(index)}
                onPointerEnter={takeControl}
                onFocus={takeControl}
              >
                <span className={styles.reveal}>
                  <span className={styles.iconShape}>
                    <Icon className={styles.icon} />
                  </span>
                </span>
                <span className={styles.year}>{milestone.year}</span>
                <span className={styles.title}>{milestone.title}</span>
                <span id={descriptionId} className={styles.description}>
                  {milestone.description}
                </span>
                <span className={styles.indicator} aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
