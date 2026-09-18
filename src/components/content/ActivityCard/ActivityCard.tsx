import { cx } from '../../../utils/cx';
import { Eyebrow } from '../../ui/Eyebrow/Eyebrow';
import styles from './ActivityCard.module.css';

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
          <img
            className={styles.image}
            src={image}
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
