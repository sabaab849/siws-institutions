import arrowUpRight from '../../../assets/icons/arrow-up-right-xs.svg';
import type { LinkItem } from '../../../data/site';
import { cx } from '../../../utils/cx';
import { Icon } from '../../ui/Icon/Icon';
import styles from './LinkList.module.css';

type LinkListProps = {
  heading: string;
  links: LinkItem[];
  /** `default`: on light backgrounds. `inverse`: footer, on brand blue. */
  variant?: 'default' | 'inverse';
  headingAs?: 'h2' | 'h3';
  className?: string;
};

/** Labelled column of links. */
export function LinkList({
  heading,
  links,
  variant = 'default',
  headingAs: Heading = 'h3',
  className,
}: LinkListProps) {
  return (
    <div className={cx(styles.list, styles[variant], className)}>
      <Heading className={styles.heading}>{heading}</Heading>
      <ul role="list" className={styles.items}>
        {links.map((link) => (
          <li key={link.label}>
            <a className={styles.link} href={link.href}>
              {link.label}
              {link.external && (
                <span className={styles.external}>
                  <Icon src={arrowUpRight} size={10} />
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
