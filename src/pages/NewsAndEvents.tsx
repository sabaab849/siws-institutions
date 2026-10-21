import type { CSSProperties } from "react";
import { PageHero } from "../components/layout/PageHero/PageHero";
import { PageSection } from "../components/layout/PageSection/PageSection";
import { Picture } from "../components/ui/Picture/Picture";
import { newsItems } from "../data/news";
import styles from "./NewsAndEvents.module.css";

export function NewsAndEvents() {
  return (
    <>
      <PageHero
        eyebrow="News and Events"
        title="News and Events"
        intro="Society-level news: Board decisions made public, Founders' Day, annual prize day, Centenary events, donor acknowledgements and major achievements across the institutions. Day-to-day school and college notices stay on their own sites."
      />

      <PageSection
        eyebrow="From the institutions"
        title="Lately Across the Society"
        lead="Until the Society publishes its own news here, this page carries what its institutions have posted on their own news pages. Each item links back to the section that published it."
      >
        <ol role="list" className={styles.grid}>
          {newsItems.map((item) => (
            <li
              key={`${item.institution} ${item.title}`}
              className={styles.card}
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
                    mobileSizes="(min-width: 640px) 45vw, 90vw"
                    alt={item.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ) : null}

              <div className={styles.body}>
                <p className={styles.meta}>
                  <span className={styles.tag}>{item.institution}</span>
                  {item.dateLabel ? (
                    <span className={styles.date}>{item.dateLabel}</span>
                  ) : null}
                  {item.category ? (
                    <span className={styles.category}>{item.category}</span>
                  ) : null}
                </p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                <a
                  className={styles.more}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <span className={styles.visuallyHidden}>
                    , on the {item.institution} site
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ol>

        {/* The annual occasions the Society means this page to carry */}
        <div className={styles.note}>
          <h3 className={styles.noteTitle}>Annual Occasions</h3>
          <ul role="list" className={styles.noteList}>
            <li>Founders&rsquo; Day</li>
            <li>The Annual Day of each institution</li>
            <li>Scholarship Award Day</li>
            <li>The Arts Centre annual programme</li>
          </ul>
        </div>
      </PageSection>
    </>
  );
}
