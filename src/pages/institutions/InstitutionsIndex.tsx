import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { InstitutionUnit } from '../../components/content/InstitutionUnit/InstitutionUnit';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { findInstitutionPage, institutionGroups } from '../../data/institutionPages';
import styles from './Institutions.module.css';

/**
 * The institutions in the four parts the Society describes them in: the school
 * from KG to Standard X, the Junior College, the College and the Arts Centre.
 * Each part carries its own pages, with a link on to each.
 */
export function InstitutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Institutions"
        title="Our Institutions"
        intro="The Society runs its institutions in Mumbai as one educational journey, from the first years of school to postgraduate study."
      />

      {institutionGroups.map((group, index) => {
        const pages = group.pages.map(findInstitutionPage).filter((page) => page !== undefined);

        return (
          <PageSection
            key={group.slug}
            tone={index % 2 === 0 ? 'default' : 'bg'}
            eyebrow={group.name}
            title={group.tagline}
            lead={group.text}
          >
            <div className={styles.units}>
              {pages.map((page) =>
                page.units.length
                  ? page.units.map((unit) => <InstitutionUnit key={unit.name} unit={unit} />)
                  : null,
              )}
            </div>

            <nav className={styles.groupLinks} aria-label={`More about ${group.name}`}>
              {pages.map((page) => (
                <ButtonLink key={page.slug} to={`/institutions/${page.slug}`} variant="quiet">
                  {page.navLabel}
                </ButtonLink>
              ))}
            </nav>
          </PageSection>
        );
      })}
    </>
  );
}
