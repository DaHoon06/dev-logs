import { ComponentProps, ReactElement } from 'react';
import styles from './Button.module.scss';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonVariant = 'primary' | 'gray' | 'icon';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
}

export const Button = (props: ButtonProps): ReactElement => {
  const { variant = 'default', className, type = 'button', icon, children, ...rest } = props;

  return (
    <button className={`${styles[variant]} ${className}`} {...rest} type={type}>
      {icon}
      {children}
    </button>
  );
};
