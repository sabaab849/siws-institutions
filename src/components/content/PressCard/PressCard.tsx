import { cx } from '../../../utils/cx';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import { Picture, type MobileImage } from '../../ui/Picture/Picture';
import styles from './PressCard.module.css';

type PressCardProps = {
  label: string;
  title: string;
  excerpt: string;
  /** Publication the story ran in, e.g. "Hindustan Times · Kaleidoscope". */
  source: string;
  image: string;
  imageAlt: string;
  /** Intrinsic size of the clipping, so its space is reserved before it loads. */
  imageWidth: number;
  imageHeight: number;
  /** Smaller copy of the clipping for phones and tablets. */
  imageMobile?: MobileImage;
  className?: string;
};

/** Press coverage: the newspaper clipping beside a short summary of the story. */
export function PressCard({
  label,
  title,
  excerpt,
  source,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageMobile,
  className,
}: PressCardProps) {
  return (
    <article className={cx(styles.card, className)}>
      <Picture
        className={styles.clipping}
        src={image}
        mobile={imageMobile}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.text}>
        <Eyebrow variant="card">{label}</Eyebrow>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <p className={styles.source}>{source}</p>
      </div>
    </article>
  );
}
