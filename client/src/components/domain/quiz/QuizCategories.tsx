import React, { ReactElement } from 'react';
import { Typography } from '@components/common/typography/Typography';
import { CardUi } from '@components/ui/card/CardUi';
import { QuizStyle } from '@components/domain/quiz/Quiz.style';
import Link from 'next/link';
import { Quiz } from '@interfaces/quiz';
import { LOCATION } from '@constants/link';

interface Props {
  items: Quiz.Categories[] | { [key: string]: any };
}

export const QuizCategories = (props: Props): ReactElement => {
  const { items } = props;

  return (
    <section css={QuizStyle.categoriesContainer}>
      <Typography variant={'h1'} weight={'bold'}>
        Quiz 카테고리를 선택해주세요.
      </Typography>
      <ul css={QuizStyle.categories}>
        {items.map((item: Quiz.Categories) => {
          return (
            <li css={QuizStyle.categoriesItems} key={item._id}>
              <Link
                href={{
                  pathname: LOCATION.QUIZ,
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
