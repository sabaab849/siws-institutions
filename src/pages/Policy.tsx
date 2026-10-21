import { PageHero } from '../components/layout/PageHero/PageHero';

type PolicyProps = {
  title: string;
  intro: string;
};

/** Privacy policy and terms: the same shell until SIWS supplies the wording. */
export function Policy({ title, intro }: PolicyProps) {
  return <PageHero eyebrow="The Society" title={title} intro={intro} />;
}
