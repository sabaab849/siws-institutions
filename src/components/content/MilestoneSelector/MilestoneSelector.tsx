import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
} from 'react';
import { useInView } from '../../../hooks/useInView';
import { useInViewOnce } from '../../../hooks/useInViewOnce';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { prefersReducedMotion } from '../../../utils/motion';
import { ArrowIcon, type IconProps } from '../../icons/MilestoneIcons';
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

/** Phones show the milestones as a focus carousel (see MilestoneSelector.module.css). */
const CAROUSEL_QUERY = '(max-width: 639.98px)';

/** Distance between card centres, as in the CSS: 0.88 × card width + 8px. */
const stepFor = (cardWidth: number) => cardWidth * 0.88 + 8;

/** Blur of a card one place from the centre, in px. */
const SIDE_BLUR = 1.5;

type Drag = { id: number; x: number; y: number; dx: number; axis: 'x' | 'y' | null };

/**
 * Row of selectable milestones. The first time the row is in view it steps
 * through every milestone once; hovering, clicking, focusing or scrolling the
 * row hands control to the reader and stops it for good.
 *
 * On phones it is a focus carousel: the active milestone sits centred and
 * sharp, its neighbours peek in smaller, blurred and faded. Arrows, swipes and
 * drags move between them.
 */
export function MilestoneSelector({ label, milestones, stepMs = 2800 }: MilestoneSelectorProps) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(() => !prefersReducedMotion());
  const [rootRef, inView] = useInView<HTMLDivElement>();
  const [listRef, revealed] = useInViewOnce<HTMLOListElement>();
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const suppressClick = useRef(false);
  const isCarousel = useMediaQuery(CAROUSEL_QUERY);
  const labelId = useId();
  const listId = useId();
  const last = milestones.length - 1;

  // Auto-progression: advances only while the row is on screen, and stops at the last milestone.
  useEffect(() => {
    if (!autoplay || !inView || !revealed || active >= last) return;
    const timer = window.setTimeout(() => setActive((index) => index + 1), stepMs);
    return () => window.clearTimeout(timer);
  }, [autoplay, inView, revealed, active, last, stepMs]);

  // Tablets: the row scrolls; keep the active milestone in it.
  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    if (isCarousel || !list || !item || list.scrollWidth <= list.clientWidth) return;

    const padding = parseFloat(getComputedStyle(list).paddingLeft) || 0;
    const start = item.offsetLeft - padding;
    const end = item.offsetLeft + item.offsetWidth + padding;
    if (start >= list.scrollLeft && end <= list.scrollLeft + list.clientWidth) return;

    list.scrollTo({ left: start, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, [active, listRef, isCarousel]);

  /**
   * Places each card by its distance from the centre (`position` may be
   * fractional mid-drag): `--offset` slides it, `--focus` (1 at the centre,
   * 0 one card away) sets its scale and opacity, and `--blur` softens it. The
   * centred card gets no filter at all, so its text stays perfectly crisp.
   */
  const applyPositions = useCallback((position: number) => {
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const offset = index - position;
      const focus = 1 - Math.min(Math.abs(offset), 1);
      item.style.setProperty('--offset', String(offset));
      item.style.setProperty('--focus', String(focus));
      item.style.setProperty('--blur', focus >= 1 ? 'none' : `blur(${((1 - focus) * SIDE_BLUR).toFixed(2)}px)`);
      item.style.setProperty('--layer', String(10 - Math.round(Math.abs(offset))));
    });
  }, []);

  useLayoutEffect(() => applyPositions(active), [active, applyPositions]);

  const takeControl = () => setAutoplay(false);
  const select = (index: number) => {
    setAutoplay(false);
    setActive(Math.min(Math.max(index, 0), last));
  };

  const cardStep = () => stepFor(itemRefs.current[0]?.offsetWidth ?? 240);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    takeControl();
    suppressClick.current = false;
    if (!isCarousel || !event.isPrimary || event.button !== 0) return;
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, axis: null };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    const viewport = viewportRef.current;
    if (!current || !viewport || event.pointerId !== current.id) return;

    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;
    if (!current.axis) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      current.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (current.axis === 'x') {
        viewport.setPointerCapture(event.pointerId);
        viewport.dataset.dragging = '';
      }
    }
    if (current.axis !== 'x') return;

    current.dx = dx;
    let position = active - dx / cardStep();
    // Past either end the row resists, moving a third as far as the finger.
    if (position < 0) position /= 3;
    if (position > last) position = last + (position - last) / 3;
    applyPositions(position);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    const viewport = viewportRef.current;
    if (!current || event.pointerId !== current.id) return;
    drag.current = null;
    if (current.axis !== 'x' || !viewport) return;

    delete viewport.dataset.dragging;
    suppressClick.current = true; // the lift at the end of a drag isn't a tap on a card

    // A fifth of a card is enough to move on; longer throws move further.
    const moved = -current.dx / cardStep();
    const steps = Math.abs(moved) < 0.2 ? 0 : Math.sign(moved) * Math.max(1, Math.round(Math.abs(moved)));
    const target = Math.min(Math.max(active + steps, 0), last);
    applyPositions(target); // cards glide from where the finger left them
    select(target);
  };

  // The browser took the gesture (e.g. a vertical scroll): settle back where we were.
  const cancelDrag = () => {
    drag.current = null;
    if (viewportRef.current) delete viewportRef.current.dataset.dragging;
    applyPositions(active);
  };

  const onCardFocus = (event: FocusEvent<HTMLButtonElement>, index: number) => {
    takeControl();
    // Tabbing through the carousel brings each milestone to the centre.
    if (isCarousel && event.currentTarget.matches(':focus-visible')) select(index);
  };

  return (
    <div ref={rootRef} className={styles.selector}>
      <div className={styles.head}>
        <h3 id={labelId} className={styles.label}>
          {label}
        </h3>
        <span className={styles.labelRule} aria-hidden="true" />
      </div>

      <div
        ref={viewportRef}
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={cancelDrag}
        onClickCapture={(event) => {
          if (!suppressClick.current) return;
          suppressClick.current = false;
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <ol
          ref={listRef}
          id={listId}
          role="list"
          className={styles.list}
          aria-labelledby={labelId}
          data-revealed={revealed || undefined}
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
                  onFocus={(event) => onCardFocus(event, index)}
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

        {/* Phones only (hidden by CSS elsewhere) */}
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          aria-label="Previous milestone"
          aria-controls={listId}
          disabled={active === 0}
          onClick={() => select(active - 1)}
        >
          <ArrowIcon className={styles.arrowIcon} />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          aria-label="Next milestone"
          aria-controls={listId}
          disabled={active === last}
          onClick={() => select(active + 1)}
        >
          <ArrowIcon className={styles.arrowIcon} />
        </button>
      </div>

      <div className={styles.pagination} aria-hidden="true">
        {milestones.map((milestone, index) => (
          <span key={milestone.year} className={styles.dot} data-active={index === active || undefined} />
        ))}
      </div>
    </div>
  );
}
