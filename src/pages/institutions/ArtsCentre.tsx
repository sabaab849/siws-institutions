import { InstitutionHero } from '../../components/content/InstitutionHero/InstitutionHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { Picture } from '../../components/ui/Picture/Picture';
import { artsCentre } from '../../data/artsCentre';
import styles from './ArtsCentre.module.css';

/**
 * The Arts, Fine Arts & Philosophy Centre. It teaches on Saturdays rather than
 * to a timetable, so the page is built around what it teaches, the year it
 * keeps and the work its students make, rather than the usual school facts.
 */
export function ArtsCentre() {
  const { facts, strands, course, year, prizes, join, gallery } = artsCentre;

  return (
    <>
      <InstitutionHero slug="arts-centre" />

      <PageSection eyebrow="The Centre" title={artsCentre.tagline} lead={artsCentre.intro}>
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection
        tone="bg"
        eyebrow="What we teach"
        title="Three Strands, One Saturday Morning"
        lead="Every subject is taught by a specialist, and a child may follow more than one."
      >
        <ul role="list" className={styles.strands}>
          {strands.map((strand) => (
            <li key={strand.title} className={styles.strand}>
              <h3 className={styles.strandTitle}>{strand.title}</h3>
              <p className={styles.strandSummary}>{strand.summary}</p>
              <ul role="list" className={styles.subjects}>
                {strand.subjects.map((subject) => (
                  <li key={subject.name} className={styles.subject}>
                    <p className={styles.subjectHead}>
                      <span className={styles.subjectName}>{subject.name}</span>
                      <span className={styles.subjectStandards}>{subject.standards}</span>
                    </p>
                    <p className={styles.subjectTeacher}>
                      {subject.teacher}
                      {subject.time ? ` · ${subject.time}` : ''}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection eyebrow="The course" title="Three Years, Two Examinations a Year">
        <ul role="list" className={styles.course}>
          {course.map((item) => (
            <li key={item.title} className={styles.courseItem}>
              <h3 className={styles.courseTitle}>{item.title}</h3>
              <p className={styles.courseText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        tone="bg"
        eyebrow="The Centre’s year"
        title="Five Dates the Centre Keeps"
        lead="Its students perform at each of them, in front of the school and their families."
      >
        <ol role="list" className={styles.year}>
          {year.map((moment) => (
            <li key={moment.month} className={styles.moment}>
              <p className={styles.momentMonth}>{moment.month}</p>
              <h3 className={styles.momentTitle}>{moment.title}</h3>
              <p className={styles.momentDetail}>{moment.detail}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection eyebrow="Recognition" title="What Its Students Have Won">
        <div className={styles.prizes}>
          <article className={styles.prizeFeature}>
            <h3 className={styles.prizeEvent}>{prizes.natyaTarang.title}</h3>
            <p className={styles.prizeAward}>{prizes.natyaTarang.award}</p>
            <p className={styles.prizeText}>{prizes.natyaTarang.text}</p>
          </article>
          <article className={styles.prizeList}>
            <h3 className={styles.prizeTitle}>{prizes.gita.title}</h3>
            <dl className={styles.gita}>
              {prizes.gita.entries.map((entry) => (
                <div key={entry.year} className={styles.gitaRow}>
                  <dt className={styles.gitaYear}>{entry.year}</dt>
                  <dd className={styles.gitaText}>{entry.text}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </PageSection>

      <PageSection
        tone="bg"
        eyebrow="From the Centre"
        title="Stage, Studio and Classroom"
        lead="Photographs the Centre publishes of its students’ work and performances."
      >
        <ul role="list" className={styles.gallery}>
          {gallery.map((photo) => (
            <li key={photo.src}>
              <figure className={styles.photo}>
                <span className={styles.photoFrame}>
                  <Picture
                    className={styles.photoImage}
                    src={photo.src}
                    mobile={{ src: photo.mobile, width: 640, fullWidth: 1024 }}
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

      <PageSection eyebrow="How to join" title="Three Steps, Once a Year">
        <div className={styles.joinLayout}>
          <ol role="list" className={styles.steps}>
            {join.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <p className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>

          <aside className={styles.contact}>
            <p className={styles.contactLabel}>Ask the Centre</p>
            <p className={styles.contactName}>{join.head.name}</p>
            <p className={styles.contactRole}>{join.head.role}</p>
            <p className={styles.contactLinks}>
              <a href={`tel:${join.head.phone}`}>{join.head.phone}</a>
              <a href={`mailto:${join.head.email}`}>{join.head.email}</a>
            </p>
          </aside>
        </div>
      </PageSection>
    </>
  );
}
