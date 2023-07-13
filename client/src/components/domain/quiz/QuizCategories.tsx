import React, { ReactElement } from 'react';
import { Typography } from '@components/common/typography/Typography';
import { CardUi } from '@components/ui/card/CardUi';
import { QuizStyle } from '@components/domain/quiz/Quiz.style';
import { getQuizData } from '@apis/quiz';
import Link from 'next/link';

export interface QuizCategories {
  _id: string;
  title: string;
  thumbnail: {
    url: string;
  };
}

interface Props {
  items: QuizCategories[] | { [key: string]: any };
}

export const QuizCategories = (props: Props): ReactElement => {
  const { items } = props;

  const onClickHandlerGetData = async (type: string) => {
    try {
      const data = await getQuizData(type);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section css={QuizStyle.categoriesContainer}>
      <Typography variant={'h1'} weight={'bold'}>
        Quiz 카테고리를 선택해주세요.
      </Typography>
      <ul css={QuizStyle.categories}>
        {items.map((item: QuizCategories) => {
          return (
            <li
              css={QuizStyle.categoriesItems}
              key={item._id}
              onClick={() => onClickHandlerGetData(item._id)}
            >
              <Link
                href={{
                  pathname: '/quiz/[type]',
                  query: { type: item._id },
                }}
              >
                <CardUi thumbnail={{ src: item.thumbnail.url, alt: item.title }}>
                  <Typography variant={'body1'} weight={'bold'}>
                    {item.title}
                  </Typography>
                </CardUi>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
