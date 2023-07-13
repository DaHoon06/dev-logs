import { css } from '@emotion/react';

export const QuizStyle = {
  container: css({
    width: '100%',
    height: '100%',
  }),
  categoriesContainer: css({
    margin: 'auto',
    width: '100%',
    maxWidth: '1000px',
    padding: '1em 1.25em',
  }),
  categories: css({
    padding: '1.25em 0',
    width: '100%',
  }),
  categoriesItems: css({
  }),
  card: css({
    width: '100%',
  }),
  categoryContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    columnGap: '1rem',
    rowGap: '1rem'
  })
};
