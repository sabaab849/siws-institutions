import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is currently in view (unlike `useInViewOnce`,
 * it keeps watching). Starts out `false`.
 *
 * @param threshold Share of the element that must be visible.
 */
export function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}
