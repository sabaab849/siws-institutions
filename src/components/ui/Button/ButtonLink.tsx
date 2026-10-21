import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../../../utils/cx';
import styles from './Button.module.css';

type ButtonLinkBase = {
  children: ReactNode;
  /**
   * `accent`: filled orange. `quiet`: outlined, for secondary actions.
   * `link`: underlined text, for the link beside a section heading.
   */
  variant?: 'accent' | 'quiet' | 'link';
  /** `lg`: standalone page and section calls to action. */
  size?: 'md' | 'lg';
  className?: string;
};

/** Either an in-site route (`to`) or an address off the site (`href`). */
type ButtonLinkProps =
  | (ButtonLinkBase & { to: string; href?: never })
  | (ButtonLinkBase & { href: string; to?: never });

/** The Button's styling on a route link, or on a link away to another site. */
export function ButtonLink(props: ButtonLinkProps) {
  const { children, variant = 'accent', size = 'md', className } = props;
  const classes = cx(styles.button, styles[variant], size === 'lg' && styles.lg, className);

  // A plain anchor; another site opens in a new tab, a mail or phone link does not
  if (props.href !== undefined) {
    const newTab = props.href.startsWith('http');

    return (
      <a
        className={classes}
        href={props.href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={props.to} className={classes}>
      {children}
    </Link>
  );
}
