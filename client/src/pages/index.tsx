import withGetServerSideProps from '@utils/withGetServerSideProps';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { getQuizCategories } from '@apis/quiz';
import { getQuizCategoriesQuery } from '../hooks/queries/quiz/useQuiz';
import { QuizCategories } from '@components/domain/quiz/QuizCategories';

const HomeStyle = {
  container: css({
    width: '100%',
    height: '100%',
  }),
};

interface Props {
  categories: InferGetServerSidePropsType<GetServerSideProps>;
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async () => {
  const data = await getQuizCategories();
  return {
    props: {
      categories: data || [],
    },
  };
});

const Home: React.FC<Props> = (props): ReactElement => {
  const { categories } = props;
  const data = getQuizCategoriesQuery(categories);

  return (
    <div css={HomeStyle.container}>
      <QuizCategories items={data} />
    </div>
  );
};

export default Home;
