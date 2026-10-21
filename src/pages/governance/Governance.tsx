import { ProfileGrid } from '../../components/content/ProfileGrid/ProfileGrid';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { coOptedTrustees, officeBearers, trustees } from '../../data/people';
import styles from './Governance.module.css';

export function Governance() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Board of Trustees and Office Bearers"
        intro="SIWS is governed by an honorary Board of Trustees led by Shri R. Radhakrishnan, Chairman."
      />

      <PageSection id="office-bearers" eyebrow="Governance" title="Office Bearers">
        <ProfileGrid people={officeBearers} />
      </PageSection>

      <PageSection id="trustees" eyebrow="Governance" title="Trustees" tone="bg">
        {/* The co-opted member sits with the Trustees; his card names the seat */}
        <ProfileGrid people={[...trustees, ...coOptedTrustees]} />
      </PageSection>

      <PageSection>
        <div className={styles.nextLinks}>
          <ButtonLink to="/governance/chairman" variant="quiet">
            From the Chairman
          </ButtonLink>
          <ButtonLink to="/governance/how-the-society-is-governed" variant="quiet">
            How the Society is governed
          </ButtonLink>
        </div>
      </PageSection>
    </>
  );
}
