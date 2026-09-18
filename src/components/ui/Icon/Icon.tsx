import { cx } from '../../../utils/cx';
import styles from './Icon.module.css';

type IconProps = {
  /** URL of an exported Figma icon (colour is baked into the SVG). */
  src: string;
  size: number;
  className?: string;
};

/** Decorative icon rendered from an exported SVG. */
export function Icon({ src, size, className }: IconProps) {
  return (
    <img
      className={cx(styles.icon, className)}
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
    />
  );
}
