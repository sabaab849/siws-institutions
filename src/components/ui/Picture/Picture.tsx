import type { ImgHTMLAttributes } from 'react';

/** A smaller copy of a photo for phones and tablets. */
export type MobileImage = {
  /** The smaller file. */
  src: string;
  /** Its width in px. */
  width: number;
  /** Width in px of the full-size file it was made from. */
  fullWidth: number;
};

type PictureProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  mobile?: MobileImage;
  /** Displayed width below 1024px, as a `sizes` value. */
  mobileSizes?: string;
};

/**
 * An `<img>` that, below 1024px, lets the browser choose between the full-size
 * file and a smaller copy for the screen's width and density. Desktop always
 * gets the full-size file, exactly as a plain `<img>`.
 */
export function Picture({ mobile, mobileSizes = '100vw', ...img }: PictureProps) {
  if (!mobile) return <img {...img} />;

  return (
    <picture>
      <source
        media="(max-width: 1023.98px)"
        srcSet={`${mobile.src} ${mobile.width}w, ${img.src} ${mobile.fullWidth}w`}
        sizes={mobileSizes}
      />
      <img {...img} />
    </picture>
  );
}
