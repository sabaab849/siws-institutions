import { cx } from '../../../utils/cx';
import styles from './QuoteBlock.module.css';

type QuoteBlockProps = {
  quote: string;
  translation: string;
  /** Language of the quote, e.g. `sa-Latn` for romanised Sanskrit. */
  lang?: string;
  className?: string;
};

/** Italic quotation with its translation, marked by a thin rule on the left. */
export function QuoteBlock({ quote, translation, lang, className }: QuoteBlockProps) {
  return (
    <figure className={cx(styles.quoteBlock, className)}>
      <blockquote className={styles.quote} lang={lang}>
        <p>{quote}</p>
      </blockquote>
      <figcaption className={styles.translation}>{translation}</figcaption>
    </figure>
  );
}
