import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/layout/Container/Container';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { Timeline } from '../../components/content/Timeline/Timeline';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Picture } from '../../components/ui/Picture/Picture';
import { footer } from '../../data/footer';
import { institutionPages } from '../../data/institutionPages';
import { newsItems } from '../../data/news';
import { sports } from '../../data/sports';
import { prefersReducedMotion } from '../../utils/motion';
import styles from './Sports.module.css';

/** Items from the Society's feed that belong on this page. */
const sportsNews = newsItems.filter(
  (item) =>
    item.category === 'Sport' ||
    /fencing|football|sports day|athletic|basketball|cricket|yoga/i.test(`${item.title} ${item.text}`),
);

const youtube = footer.social.accounts.find((account) => account.label === 'YouTube');

export function Sports() {
  const { school, college, current, photos, catalogue } = sports;
  const feature = catalogue.find((sport) => sport.feature);
  const rest = catalogue.filter((sport) => !sport.feature);

  const heroRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  /** Where the cursor is over the photograph, as a fraction of its box. */
  const trackPointer = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - box.left) / box.width,
      y: (event.clientY - box.top) / box.height,
    });
  };

  return (
    <>
      {/* The same split as every institution page: the page at the left, one
          large photograph at the right, the institutions along the foot. */}
      <section
        ref={heroRef}
        className={styles.hero}
        aria-labelledby="page-title"
        style={
          {
            '--pointer-x': `${(pointer?.x ?? 0.5) * 100}%`,
            '--pointer-y': `${(pointer?.y ?? 0.5) * 100}%`,
            '--shift-x': `${(0.5 - (pointer?.x ?? 0.5)) * 3}%`,
            '--shift-y': `${(0.5 - (pointer?.y ?? 0.5)) * 3}%`,
          } as CSSProperties
        }
        data-pointer={pointer ? '' : undefined}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroInfo}>
            <p className={styles.heroCounter}>Across all six institutions</p>
            <h1 className={styles.heroName} id="page-title">
              Sports at SIWS
            </h1>
            <p className={styles.heroDescriptor}>{sports.intro}</p>
            <p className={styles.heroMeta}>
              <span>{sports.motto}</span>
              <span>15 sports</span>
            </p>
          </div>

          <div
            className={styles.heroVisual}
            onPointerMove={trackPointer}
            onPointerLeave={() => setPointer(null)}
          >
            <div className={styles.heroFrame}>
              <Picture
                className={styles.heroPhoto}
                src={photos.fencing.src}
                mobile={{ src: photos.fencing.mobile, width: 640, fullWidth: 1400 }}
                mobileSizes="100vw"
                alt={photos.fencing.alt}
                fetchPriority="high"
              />
            </div>
            <Link className={styles.heroSociety} to="/institutions">
              South Indians&rsquo; Welfare Society
            </Link>

            {/* The photograph answers the cursor, as on every institution page */}
            <button
              type="button"
              className={styles.heroExplore}
              onClick={() =>
                heroRef.current?.nextElementSibling?.scrollIntoView({
                  behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                })
              }
            >
              <span className={styles.heroExploreLabel}>Explore sports at SIWS</span>
              <span className={styles.heroExploreDot} aria-hidden="true">
                Explore &rarr;
              </span>
            </button>
          </div>

          <div className={styles.heroSwitcher}>
            <ul role="list" className={styles.heroList}>
              {institutionPages.map((page, index) => (
                <li key={page.slug}>
                  <Link className={styles.heroSwitch} to={`/institutions/${page.slug}`}>
                    <span className={styles.heroSwitchIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {page.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
            <span className={styles.heroProgress} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* The School's figures, under the hero */}
      <section className={styles.figuresBand}>
        <Container>
          <ul role="list" className={styles.heroFigures}>
            {sports.figures.map((figure) => (
              <li key={figure.label} className={styles.heroFigure}>
                <span className={styles.heroValue}>{figure.value}</span>
                <span className={styles.heroLabel}>{figure.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Every sport, running across the page */}
      <div className={styles.ribbon} aria-hidden="true">
        <p className={styles.ribbonTrack}>
          {catalogue.map((sport) => (
            <span key={sport.name} className={styles.ribbonItem}>
              {sport.name}
            </span>
          ))}
        </p>
      </div>

      <PageSection eyebrow="Our philosophy" title="Sport Is Part of the Education">
        <div className={styles.feature}>
          <div className={styles.featureText}>
            {sports.philosophy.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <figure className={styles.offsetFigure}>
            <Picture
              className={styles.offsetImage}
              src={photos.kgTeam.src}
              mobile={{ src: photos.kgTeam.mobile, width: 640, fullWidth: 1400 }}
              mobileSizes="(min-width: 900px) 45vw, 100vw"
              alt={photos.kgTeam.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </PageSection>

      {/* The fifteen sports, as tiles rather than a list */}
      <PageSection
        className={styles.tightBand}
        tone="brand"
        eyebrow="Sports we offer"
        title="Fifteen Sports, One Team Sheet"
        lead={school.competition}
      >
        <ul role="list" className={styles.grid}>
          {feature ? (
            <li className={`${styles.tile} ${styles.tileFeature}`}>
              <span className={styles.tileMark} aria-hidden="true">
                {feature.name.charAt(0)}
              </span>
              <h3 className={styles.tileNameLarge}>{feature.name}</h3>
              <ul role="list" className={styles.tags}>
                {feature.tags.map((tag) => (
                  <li key={tag} className={styles.tagStrong}>
                    {tag}
                  </li>
                ))}
              </ul>
              <p className={styles.tileText}>{feature.text}</p>
            </li>
          ) : null}

          {rest.map((sport) => (
            <li key={sport.name} className={styles.tile}>
              <span className={styles.tileMark} aria-hidden="true">
                {sport.name.charAt(0)}
              </span>
              <h3 className={styles.tileName}>{sport.name}</h3>
              {sport.tags.length ? (
                <ul role="list" className={styles.tags}>
                  {sport.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </PageSection>

      {/* Training, numbered down the page beside its heading */}
      <PageSection eyebrow="Training" title="How They Train" lead={school.coaches}>
        <ol role="list" className={styles.steps}>
          {school.training.map((item, index) => (
            <li key={item.name} className={styles.step}>
              <span className={styles.stepIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.stepName}>{item.name}</span>
              <span className={styles.stepText}>{item.text}</span>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection tone="bg" eyebrow="Our facilities" title="Where They Play">
        <ul role="list" className={styles.facilities}>
          {sports.facilities.map((facility) => (
            <li key={facility.name} className={styles.facility}>
              {facility.value ? (
                <span className={styles.facilityValue}>{facility.value}</span>
              ) : (
                <span className={styles.facilityRule} aria-hidden="true" />
              )}
              <span className={styles.facilityName}>{facility.name}</span>
              {facility.detail ? (
                <span className={styles.facilityDetail}>{facility.detail}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </PageSection>

      {/* The sporting year */}
      <PageSection eyebrow="The sporting year" title="Dates the School Keeps">
        <ul role="list" className={styles.cards}>
          {school.year.map((item) => (
            <li key={item.name} className={styles.card}>
              <h3 className={styles.cardName}>{item.name}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      {/* This year's results, on the Society's blue */}
      <PageSection
        className={styles.tightBand}
        tone="brand"
        eyebrow="This year"
        title="Current-Year Achievements"
      >
        <div className={styles.feature}>
          <article className={styles.resultFeature}>
            <h3 className={styles.resultFeatureTitle}>{current.feature.title}</h3>
            <p className={styles.resultFeatureAward}>{current.feature.award}</p>
            <p className={styles.resultFeatureText}>{current.feature.text}</p>
          </article>
          <figure className={styles.offsetFigure}>
            <Picture
              className={styles.offsetImage}
              src={photos.football.src}
              mobile={{ src: photos.football.mobile, width: 640, fullWidth: 900 }}
              mobileSizes="(min-width: 900px) 45vw, 100vw"
              alt={photos.football.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <ul role="list" className={styles.results}>
          {current.results.map((result) => (
            <li key={result.name} className={styles.result}>
              <span className={styles.resultName}>{result.name}</span>
              <span className={styles.resultText}>{result.text}</span>
            </li>
          ))}
        </ul>

        <ul role="list" className={styles.tally}>
          {current.tally.map((item) => (
            <li key={item.label} className={styles.tallyItem}>
              <span className={styles.tallyValue}>{item.value}</span>
              <span className={styles.tallyLabel}>{item.label}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection eyebrow="College sports" title="The Gymkhana" lead={college.intro}>
        <ul role="list" className={styles.chips}>
          {college.sports.map((sport) => (
            <li key={sport} className={styles.chip}>
              {sport}
            </li>
          ))}
        </ul>

        <dl className={styles.definitions}>
          {college.notes.map((note) => (
            <div key={note.name} className={styles.definition}>
              <dt className={styles.definitionName}>{note.name}</dt>
              <dd className={styles.definitionText}>{note.text}</dd>
            </div>
          ))}
          <div className={styles.definition}>
            <dt className={styles.definitionName}>Fencing as a course</dt>
            <dd className={styles.definitionText}>{college.fencingCourse}</dd>
          </div>
        </dl>
      </PageSection>

      <PageSection tone="bg" eyebrow="Sports history" title="How It Was Built">
        <Timeline entries={sports.history} />
      </PageSection>

      <PageSection
        eyebrow="Hall of fame"
        title="Names the Institutions Record"
        lead={sports.alumni}
      >
        <ol role="list" className={styles.honours}>
          {sports.hallOfFame.map((entry) => (
            <li key={`${entry.year} ${entry.names}`} className={styles.honour}>
              <p className={styles.honourYear}>{entry.year}</p>
              <p className={styles.honourNames}>{entry.names}</p>
              <p className={styles.honourText}>{entry.text}</p>
            </li>
          ))}
        </ol>

        <ul role="list" className={styles.ahead}>
          {sports.ahead.map((item) => (
            <li key={item} className={styles.aheadItem}>
              {item}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        tone="bg"
        eyebrow="Photo gallery"
        title="On the Ground and on the Podium"
        lead="Photographs the institutions publish of their own sporting year."
      >
        <ul role="list" className={styles.gallery}>
          {sports.gallery.map((photo, index) => (
            <li key={photo.src} className={styles.galleryItem} data-tilt={index % 2 ? 'b' : 'a'}>
              <figure className={styles.photo}>
                <span className={styles.photoFrame}>
                  <Picture
                    className={styles.photoImage}
                    src={photo.src}
                    mobile={{ src: photo.mobile, width: 640, fullWidth: 1400 }}
                    mobileSizes="(min-width: 640px) 45vw, 100vw"
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <figcaption className={styles.photoCaption}>{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </PageSection>

      {youtube ? (
        <section className={styles.cta}>
          <Container className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Sport on Film</h2>
              <p className={styles.ctaText}>
                Match and event footage, on the institutions&rsquo; own channel.
              </p>
            </div>
            <ButtonLink href={youtube.href} className={styles.ctaButton}>
              Watch on the SIWS channel
            </ButtonLink>
          </Container>
        </section>
      ) : null}

      {sportsNews.length ? (
        <PageSection eyebrow="Sports news" title="Sports News and Updates">
          <ol role="list" className={styles.news}>
            {sportsNews.map((item) => (
              <li key={`${item.institution} ${item.title}`} className={styles.newsItem}>
                <p className={styles.newsMeta}>
                  <span className={styles.newsTag}>{item.institution}</span>
                  {item.dateLabel ? <span className={styles.newsDate}>{item.dateLabel}</span> : null}
                </p>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.newsText}>{item.text}</p>
              </li>
            ))}
          </ol>
          <ButtonLink to="/news-and-events" variant="link">
            All news and events
          </ButtonLink>
        </PageSection>
      ) : null}
    </>
  );
}
