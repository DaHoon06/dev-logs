import React, { ReactElement } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import withGetServerSideProps from '@utils/withGetServerSideProps';
import { getQuizData } from '@apis/quiz';
import { getQuizDataQuery } from '../../hooks/queries/quiz/useQuiz';
import { Quiz } from '@interfaces/quiz';

interface Props {
  quizData: InferGetServerSidePropsType<GetServerSideProps>;
  type: string;
}

const QuizPage: React.FC<Props> = (props): ReactElement => {
  const { quizData, type } = props;
  const data = getQuizDataQuery(quizData, type);

  return (
    <div>
      문제 가즈아
      <p>갈끄니까~!</p>
      {data.map((value: Quiz.Data, index: number) => {
        return (
          <div key={index}>
            {value.question}

            {value.example.map((item) => {
              return <div key={item.exampleId}>{item.answer}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default QuizPage;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async (ctx) => {
  const { type } = ctx.query as { type: string };
  const data = await getQuizData(type);
  return {
    props: {
      quizData: data || [],
      type,
    },
  };
});
