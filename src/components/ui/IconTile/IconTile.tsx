import { cx } from '../../../utils/cx';
import { Icon } from '../Icon/Icon';
import styles from './IconTile.module.css';

type IconTileProps = {
  icon: string;
  iconSize: number;
  /** `circle`: 44px white disc. `square`: 40px bordered tile. */
  variant: 'circle' | 'square';
  className?: string;
};

/** An icon centred in a small round or square frame. */
export function IconTile({ icon, iconSize, variant, className }: IconTileProps) {
  return (
    <span className={cx(styles.tile, styles[variant], className)} aria-hidden="true">
      <Icon src={icon} size={iconSize} />
    </span>
  );
}
