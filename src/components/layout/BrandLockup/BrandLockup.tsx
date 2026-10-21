import { Link } from 'react-router-dom';
import logo from '../../../assets/siws-logo.png';
import { site } from '../../../data/site';
import { cx } from '../../../utils/cx';
import styles from './BrandLockup.module.css';

type BrandLockupProps = {
  to?: string;
  className?: string;
};

/** SIWS crest with the society's name, linking back to the homepage. */
export function BrandLockup({ to = '/', className }: BrandLockupProps) {
  return (
    <Link to={to} className={cx(styles.lockup, className)}>
      <span className={styles.mark}>
        <img className={styles.logo} src={logo} alt="" width={34} height={34} />
      </span>
      <span className={styles.wordmark}>{site.name}</span>
    </Link>
  );
}
