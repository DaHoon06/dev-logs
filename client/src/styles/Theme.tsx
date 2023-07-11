import { Theme } from '@emotion/react';

const theme: Theme = {
  fontSizes: {
    xxs: '12px',
    xs: '13px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '24px',
  },
  colors: {
    white: '#fff',
    black: '#323232',
    gray: '#737373',
    line: '#ededed',
    primary: '#00c7ae',
  },
};

export type Colors<C> = C;
export type FontSize<F> = F;

export default theme;
