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
  container: css({}),
  categories: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.25em 0',
    width: '100%',
    maxWidth: '1000px',
    height: '400px',
    margin: 'auto',
  }),
  categoriesItems: css({
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
    <div>
      <div css={HomeStyle.categories}>
        {data.map((item: QuizCategories) => {
          return (
            <div css={HomeStyle.categoriesItems} key={item._id}>
              <CardUi thumbnail={{ src: item.thumbnail.url, alt: item.title }}>
                <Typography variant={'body1'} weight={'bold'}>
                  {item.title}
                </Typography>
              </CardUi>
            </div>
          );
        })}
      </div>
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
