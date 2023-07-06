import React, { ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

type Variant = 'title' | 'h1' | 'h2' | 'h3' | 'sub1' | 'sub2' | 'body1' | 'body2';
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type FontColor =
  | 'black'
  | 'black100'
  | 'white'
  | 'line'
  | 'placeholder'
  | 'textSub'
  | 'skyblue'
  | 'red'
  | 'yellow'
  | 'gray'
  | 'light-gray';

export interface Props extends ComponentProps<'p'> {
  variant?: Variant;
  fontWeight?: FontWeight;
  fontColor?: FontColor;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
}

export const Typography = (props: Props) => {
  const {
    className,
    variant = 'body1',
    fontWeight = 'regular',
    fontColor = 'gray1',
    children,
    as,
    ...rest
  } = props;

  const element: { [key in Variant]: string } = {
    title: 'h1',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    sub1: 'h4',
    sub2: 'h5',
    body1: 'p',
    body2: 'p',
  };

  return React.createElement(
    as || element[variant],
    {
      className: classNames(styles[variant], styles[fontWeight], styles[fontColor], className),
      ...rest,
    },
    children,
  );
};
