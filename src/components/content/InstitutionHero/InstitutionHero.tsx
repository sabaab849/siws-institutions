import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { institutionHeroes } from '../../../data/institutionHeroes';
import { institutionPages } from '../../../data/institutionPages';
import { cx } from '../../../utils/cx';
import { prefersReducedMotion } from '../../../utils/motion';
import { Picture } from '../../ui/Picture/Picture';
import styles from './InstitutionHero.module.css';

/** How long the photograph takes to hand over to the next institution. */
const SWITCH_MS = 800;
/** A drag this far across the photograph moves to the next institution. */
const SWIPE_PX = 60;

const slides = institutionPages
  .filter((page) => institutionHeroes[page.slug])
  .map((page, index, all) => ({
    slug: page.slug,
    navLabel: page.navLabel,
    position: String(index + 1).padStart(2, '0'),
    total: String(all.length).padStart(2, '0'),
    ...institutionHeroes[page.slug],
  }));

type InstitutionHeroProps = {
  slug: string;
};

/**
 * The hero of one institution page: its name and facts beside a single large
 * photograph, with the Society's other institutions along the foot. Moving
 * between them hands the photograph over rather than reloading the view.
 */
export function InstitutionHero({ slug }: InstitutionHeroProps) {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const index = slides.findIndex((slide) => slide.slug === slug);
  const slide = slides[index];

  // The institution being replaced, kept on screen until it has moved out.
  const [leaving, setLeaving] = useState<{ slug: string; direction: number } | null>(null);
  const shownSlug = useRef(slug);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    if (shownSlug.current === slug) return;

    const from = slides.findIndex((item) => item.slug === shownSlug.current);
    shownSlug.current = slug;
    if (from < 0 || prefersReducedMotion()) return;

    setLeaving({ slug: slides[from].slug, direction: index > from ? 1 : -1 });
    const timer = window.setTimeout(() => setLeaving(null), SWITCH_MS);
    return () => window.clearTimeout(timer);
  }, [slug, index]);

  if (!slide) return null;

  const leavingSlide = leaving ? slides.find((item) => item.slug === leaving.slug) : undefined;

  const go = (step: number) => {
    const next = slides[index + step];
    if (next) navigate(`/institutions/${next.slug}`);
  };

  const trackPointer = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - box.left) / box.width,
      y: (event.clientY - box.top) / box.height,
    });
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    dragStart.current = null;
    if (start === null) return;
    const moved = event.clientX - start;
    if (Math.abs(moved) > SWIPE_PX) go(moved < 0 ? 1 : -1);
  };

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-labelledby="institution-hero-title"
      style={
        {
          '--pointer-x': `${(pointer?.x ?? 0.5) * 100}%`,
          '--pointer-y': `${(pointer?.y ?? 0.5) * 100}%`,
          '--shift-x': `${(0.5 - (pointer?.x ?? 0.5)) * 3}%`,
          '--shift-y': `${(0.5 - (pointer?.y ?? 0.5)) * 3}%`,
          '--active': index,
          '--count': slides.length,
        } as CSSProperties
      }
      data-pointer={pointer ? '' : undefined}
    >
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.counter}>
            Institution {slide.position} / {slide.total}
          </p>

          <h1 id="institution-hero-title" className={styles.name}>
            <span key={slide.slug} className={styles.nameInner}>
              {slide.name}
            </span>
          </h1>

          <p key={`${slide.slug}-descriptor`} className={styles.descriptor}>
            {slide.descriptor}
          </p>

          <p key={`${slide.slug}-meta`} className={styles.meta}>
            {slide.established ? <span>Est. {slide.established}</span> : null}
            <span>{slide.type}</span>
          </p>
        </div>

        <div
          className={styles.visual}
          onPointerMove={trackPointer}
          onPointerLeave={() => setPointer(null)}
          onPointerDown={(event) => {
            dragStart.current = event.clientX;
          }}
          onPointerUp={endDrag}
          onPointerCancel={() => {
            dragStart.current = null;
          }}
        >
          <div className={styles.frame}>
            {leavingSlide ? (
              <Picture
                key={leavingSlide.slug}
                className={cx(styles.photo, styles.photoLeaving)}
                style={{ '--direction': leaving?.direction } as CSSProperties}
                src={leavingSlide.image}
                mobile={{ src: leavingSlide.imageMobile, width: 800, fullWidth: 1400 }}
                mobileSizes="100vw"
                alt=""
                aria-hidden="true"
                decoding="async"
              />
            ) : null}
            <Picture
              key={slide.slug}
              className={cx(styles.photo, leaving && styles.photoEntering)}
              style={{ '--direction': leaving?.direction } as CSSProperties}
              src={slide.image}
              mobile={{ src: slide.imageMobile, width: 800, fullWidth: 1400 }}
              mobileSizes="100vw"
              alt={slide.alt}
              decoding="async"
            />
          </div>

          <Link className={styles.society} to="/institutions">
            <span className={styles.societyName}>South Indians&rsquo; Welfare Society</span>
            <span className={styles.societyHover} aria-hidden="true">
              View all institutions &rarr;
            </span>
          </Link>

          <button
            type="button"
            className={styles.explore}
            onClick={() =>
              heroRef.current?.nextElementSibling?.scrollIntoView({
                behavior: prefersReducedMotion() ? 'auto' : 'smooth',
              })
            }
          >
            <span className={styles.exploreLabel}>Explore {slide.navLabel}</span>
            <span className={styles.exploreDot} aria-hidden="true">
              Explore &rarr;
            </span>
          </button>

          <div className={styles.steps}>
            <button type="button" onClick={() => go(-1)} disabled={index === 0}>
              <span aria-hidden="true">&larr;</span>
              <span className={styles.stepLabel}>Previous institution</span>
            </button>
            <button type="button" onClick={() => go(1)} disabled={index === slides.length - 1}>
              <span aria-hidden="true">&rarr;</span>
              <span className={styles.stepLabel}>Next institution</span>
            </button>
          </div>
        </div>

        <nav className={styles.switcher} aria-label="The Society's institutions">
          <ol className={styles.list}>
            {slides.map((item) => (
              <li key={item.slug}>
                <Link
                  className={styles.switch}
                  to={`/institutions/${item.slug}`}
                  aria-current={item.slug === slide.slug ? 'page' : undefined}
                >
                  <span className={styles.switchIndex}>{item.position}</span>
                  <span className={styles.switchName}>{item.navLabel}</span>
                </Link>
              </li>
            ))}
          </ol>
          <span className={styles.progress} aria-hidden="true" />
        </nav>
      </div>
    </section>
  );
}
