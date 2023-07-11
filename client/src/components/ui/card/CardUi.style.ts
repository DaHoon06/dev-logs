import { css } from '@emotion/react';
import theme from '@styles/Theme';

export const cardUiStyle = {
  container: css({
    width: '100%',
    height: '100%',
    maxWidth: '500px',
    minWidth: '120px',
    minHeight: '260px',
    backgroundColor: theme.colors.white,
    border: '1px solid #ededed',
    boxShadow: '2px 2px 8px 0 rgba(200,200,200, 0.4)',
    borderRadius: '10px',
    transition: 'all ease .3s',

    ':hover': {
      cursor: 'pointer',
      filter: 'brightness(97%)',
      height: '100%',
      width: '100%',
    },
  }),
  thumbnail: css({
    width: '100%',
    height: '100%',
    borderBottom: `1px solid ${theme.colors.line}`,
    img: {
      width: '100%',
      minHeight: '160px',
      borderRadius: '10px 10px 2px 2px',
    },
  }),
  body: css({
    padding: '0.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }),
};
