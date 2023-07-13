import { css } from '@emotion/react';

export const QuizStyle = {
  container: css({
    width: '100%',
    height: '100%',
  }),
  categoriesContainer: css({
    padding: '1em 1.25em',
  }),
  categories: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1.25em 0',
    width: '100%',
    maxWidth: '1000px',
  }),
  categoriesItems: css({
    width: '210px',
    marginRight: '1.25em',
  }),
};
