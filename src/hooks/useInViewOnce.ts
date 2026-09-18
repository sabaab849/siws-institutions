import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

/**
 * Reports once that an element has scrolled into view, then stops watching.
 * Starts out `true` when motion is reduced or IntersectionObserver is missing,
 * so content is never left waiting for an entrance that will not play.
 *
 * @param rootMargin How far inside the viewport the element must reach.
 */
export function useInViewOnce<T extends Element>(rootMargin = '0px 0px -15% 0px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const node = ref.current;
    if (inView || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Content the reader has already scrolled past (e.g. after an in-page link) counts as seen.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView] as const;
}
