import { PageHero } from '../../components/layout/PageHero/PageHero';
import { Banner } from '../../components/layout/Banner/Banner';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Prose } from '../../components/ui/Prose/Prose';
import { giving } from '../../data/giving';
import { site } from '../../data/site';
import styles from './Membership.module.css';

export function MembershipIndex() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="About Membership"
        intro="The South Indians' Welfare Society is a membership society. Its members elect the office bearers who hold the Society's institutions in trust."
      />

      <PageSection id="categories" eyebrow="Categories" title="Membership Categories">
        <Prose>
          <p>
            Neither of the Society&rsquo;s institution websites currently publishes its membership
            rules, so this section is held for the Society&rsquo;s own wording.
          </p>
        </Prose>
      </PageSection>

      <PageSection
        id="scholarships"
        eyebrow="Scholarships & Endowments"
        title="A Hundred and Fifty Funds, One Purpose"
        lead={giving.scholarships.intro}
        tone="bg"
      >
        <ul role="list" className={styles.figures}>
          {giving.scholarships.figures.map((figure) => (
            <li key={figure.label} className={styles.figure}>
              <span className={styles.figureValue}>{figure.value}</span>
              <span className={styles.figureLabel}>{figure.label}</span>
            </li>
          ))}
        </ul>
        <Prose>
          {giving.scholarships.detail.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Prose>
      </PageSection>

      <PageSection
        id="contributing-to-the-future"
        eyebrow="Contributing to the Future"
        title={giving.support.headline}
        lead={giving.support.intro}
      >
        <ol role="list" className={styles.ways}>
          {giving.support.ways.map((way, index) => (
            <li key={way.name} className={styles.way}>
              <span className={styles.wayIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.wayName}>{way.name}</h3>
              <p className={styles.wayText}>{way.text}</p>
            </li>
          ))}
        </ol>
        <Prose>
          <p>{giving.support.tax}</p>
          <p>{giving.support.how}</p>
        </Prose>
      </PageSection>

      <Banner
        tone="warm"
        eyebrow="Enquiries"
        title="Membership Enquiries"
        lead={
          <>
            For questions about membership, write to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.
          </>
        }
      >
        <ButtonLink to="/membership/faqs" variant="quiet">
          Membership FAQs
        </ButtonLink>
      </Banner>
    </>
  );
}
