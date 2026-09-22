import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { InstitutionPreview } from '../../components/content/InstitutionPreview/InstitutionPreview';
import { InstitutionRow } from '../../components/content/InstitutionRow/InstitutionRow';
import { Container } from '../../components/layout/Container/Container';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { institutions } from '../../data/institutions';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { withLineBreaks } from '../../utils/withLineBreaks';
import styles from './Institutions.module.css';

/** A closed preview keeps its last image this long (its fade-out), then resets so the next opens cleanly. */
const PREVIEW_RESET_MS = 400;

/**
 * Where the shared hover preview is shown (matches Institutions.module.css).
 * Elsewhere it isn't rendered, so touch screens don't download its photos.
 */
const HOVER_PREVIEW_QUERY = '(min-width: 1024px) and (hover: hover) and (pointer: fine)';

type PreviewState = {
  active: number | null;
  open: boolean;
  follow: boolean;
  y: number;
};

/** Centres the preview on a row, kept within the list. */
function offsetForRow(list: HTMLElement | null, preview: HTMLElement | null, index: number) {
  const row = list?.querySelectorAll<HTMLElement>(':scope > ol > li')[index];
  if (!list || !preview || !row) return 0;
  const centred = row.offsetTop + (row.offsetHeight - preview.offsetHeight) / 2;
  return Math.min(Math.max(centred, 0), list.offsetHeight - preview.offsetHeight);
}

/** Which row the desktop preview shows, where it sits, and whether it is open. */
function usePreview() {
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<PreviewState>({ active: null, open: false, follow: false, y: 0 });
  const resetTimer = useRef(0);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const show = (active: number) => {
    window.clearTimeout(resetTimer.current);
    const y = offsetForRow(listRef.current, previewRef.current, active);
    // Slide only while the last image is still on screen; otherwise appear at the row.
    setState((current) => ({ active, open: true, follow: current.active !== null, y }));
  };

  const close = () => {
    setState((current) => ({ ...current, open: false }));
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(
      () => setState((current) => (current.open ? current : { ...current, active: null, follow: false })),
      PREVIEW_RESET_MS,
    );
  };

  return { ...state, listRef, previewRef, show, close };
}

export function Institutions() {
  const [sectionRef, inView] = useInViewOnce<HTMLElement>();
  const preview = usePreview();
  const canPreview = useMediaQuery(HOVER_PREVIEW_QUERY);

  return (
    <section
      ref={sectionRef}
      id="institutions"
      className={styles.institutions}
      aria-labelledby="institutions-title"
      data-state={inView ? 'shown' : 'hidden'}
    >
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <Eyebrow>{institutions.eyebrow}</Eyebrow>
          <SectionTitle id="institutions-title" leading="tight">
            {withLineBreaks(institutions.titleLines)}
          </SectionTitle>
          <p className={styles.lead}>{institutions.intro}</p>
        </div>

        <div ref={preview.listRef} className={styles.index}>
          <ol
            role="list"
            className={styles.list}
            onPointerLeave={preview.close}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) preview.close();
            }}
          >
            {institutions.items.map((item, index) => (
              <InstitutionRow
                key={item.index}
                {...item}
                onActivate={() => preview.show(index)}
                style={{ '--row': index } as CSSProperties}
              />
            ))}
          </ol>
          {canPreview && (
            <InstitutionPreview
              ref={preview.previewRef}
              className={styles.preview}
              items={institutions.items}
              active={preview.active}
              open={preview.open}
              follow={preview.follow}
              y={preview.y}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
