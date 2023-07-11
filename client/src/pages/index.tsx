import withGetServerSideProps from '@utils/withGetServerSideProps';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { CardUi } from '@components/ui/card/CardUi';
import { css } from '@emotion/react';
import { Typography } from '@components/common/typography/Typography';
import { getQuizCategories } from '@apis/quiz';
import { useQuiz } from '../hooks/queries/quiz/useQuiz';

export interface QuizCategories {
  [p: string]: any;
  _id: string;
  title: string;
  thumbnail: {
    url: string;
  };
}

const HomeStyle = {
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

interface Props {
  categories: InferGetServerSidePropsType<GetServerSideProps>;
}

const Home: React.FC<Props> = (props): ReactElement => {
  const { categories } = props;

  const data = useQuiz(categories);

  return (
    <div css={HomeStyle.container}>
      <section css={HomeStyle.categoriesContainer}>
        <Typography variant={'h1'} weight={'bold'}>
          Quiz 카테고리를 선택해주세요.
        </Typography>
        <ul css={HomeStyle.categories}>
          {data.map((item: QuizCategories) => {
            return (
              <li css={HomeStyle.categoriesItems} key={item._id}>
                <CardUi thumbnail={{ src: item.thumbnail.url, alt: item.title }}>
                  <Typography variant={'body1'} weight={'bold'}>
                    {item.title}
                  </Typography>
                </CardUi>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async (ctx) => {
  const data = await getQuizCategories();
  return {
    props: {
      categories: data || [],
    },
  };
});
