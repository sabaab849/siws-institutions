import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import styles from './Button.module.css';

type ButtonVariant = 'accent';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/** Renders an `<a>` when given `href`, otherwise a `<button>`. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = 'accent', className, ...rest } = props;
    return <a className={cx(styles.button, styles[variant], className)} {...rest} />;
  }

  const { variant = 'accent', className, type = 'button', ...rest } = props;
  return <button type={type} className={cx(styles.button, styles[variant], className)} {...rest} />;
}
