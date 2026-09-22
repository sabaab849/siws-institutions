import { cx } from '../../../utils/cx';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import { Picture, type MobileImage } from '../../ui/Picture/Picture';
import styles from './ActivityCard.module.css';

/** How wide each layout's photo is shown below 1024px (see ActivityCard.module.css). */
const MOBILE_SIZES = {
  feature: '100vw',
  stacked: '(min-width: 640px) 50vw, 100vw',
  horizontal: '(min-width: 640px) 140px, 100vw',
} as const;

type ActivityCardProps = {
  /**
   * `feature`: tall image with the caption on a white panel.
   * `stacked`: image above the text.
   * `horizontal`: bordered card with a thumbnail beside the text.
   */
  layout: 'feature' | 'stacked' | 'horizontal';
  category: string;
  title: string;
  description?: string;
  /** Photo URL; a grey placeholder shows until one is provided. */
  image?: string;
  imageAlt?: string;
  /** Focal point kept in frame when the photo is cropped (CSS `object-position`). */
  imagePosition?: string;
  /** Smaller copy of the photo for phones and tablets. */
  imageMobile?: MobileImage;
  className?: string;
};

export function ActivityCard({
  layout,
  category,
  title,
  description,
  image,
  imageAlt = '',
  imagePosition,
  imageMobile,
  className,
}: ActivityCardProps) {
  const text = (
    <div className={styles.text}>
      <Eyebrow variant="card" tone={layout === 'stacked' ? 'muted' : 'brand'}>
        {category}
      </Eyebrow>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );

  return (
    <article className={cx(styles.card, styles[layout], className)}>
      <div className={styles.media}>
        {image && (
          <Picture
            className={styles.image}
            src={image}
            mobile={imageMobile}
            mobileSizes={MOBILE_SIZES[layout]}
            alt={imageAlt}
            style={{ objectPosition: imagePosition }}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      {layout === 'feature' ? <div className={styles.caption}>{text}</div> : text}
    </article>
  );
}
