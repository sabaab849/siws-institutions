import type { CSSProperties } from "react";
import { PageSection } from "../../components/layout/PageSection/PageSection";
import { ButtonLink } from "../../components/ui/Button/ButtonLink";
import { Picture } from "../../components/ui/Picture/Picture";
import { latestNews } from "../../data/news";
import styles from "./LatestNews.module.css";

/**
 * "Latest from SIWS" in the content draft: the newest item from each of the
 * four sections, taken from their own news pages until the Society supplies
 * its own.
 */
export function LatestNews() {
  return (
    <PageSection
      eyebrow="Latest from SIWS"
      title="News From Across the Society"
      action={
        <ButtonLink to="/news-and-events" variant="link">
          News and Events
        </ButtonLink>
      }
    >
      <ul role="list" className={styles.items}>
        {latestNews.map((item) => (
          <li
            key={item.title}
            className={styles.item}
            data-photo={item.image ? "" : undefined}
          >
            {item.image ? (
              <span
                className={styles.frame}
                style={
                  { "--photo-position": item.image.position } as CSSProperties
                }
              >
                <Picture
                  className={styles.image}
                  src={item.image.src}
                  mobile={{
                    src: item.image.mobile,
                    width: 384,
                    fullWidth: 640,
                  }}
                  mobileSizes="(min-width: 768px) 45vw, 100vw"
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </span>
            ) : (
              // Nothing published with the item, so its label stands in its place
              <span className={styles.frame} data-label="">
                <span className={styles.labelWord}>
                  {item.category ?? item.institution}
                </span>
              </span>
            )}
            <p className={styles.meta}>
              <span className={styles.institution}>{item.institution}</span>
              {item.dateLabel ? (
                <span className={styles.date}>{item.dateLabel}</span>
              ) : null}
            </p>
            <h3 className={styles.title}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
