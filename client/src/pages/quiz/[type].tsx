import React, { ReactElement } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import withGetServerSideProps from '@utils/withGetServerSideProps';
import { getQuizData } from '@apis/quiz';
import { getQuizDataQuery } from '../../hooks/queries/quiz/useQuiz';
import { Quiz } from '@interfaces/quiz';
import { FormUi } from '@components/ui/form/FormUi';
import { ProgressBar } from '@components/ui/progress/ProgressBar';
import { css } from '@emotion/react';
import useUtilsStore from '../../store/utils.store';
import { Button } from '@components/common/button/Button';
import { Typography } from '@components/common/typography/Typography';

interface Props {
  quizData: InferGetServerSidePropsType<GetServerSideProps>;
  type: string;
}

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

const QuizPage: React.FC<Props> = (props): ReactElement => {
  const { quizData, type } = props;
  const { page, setPage } = useUtilsStore();
  const data = getQuizDataQuery(quizData, type);
  const totalCount = (() => data.length)();

  const nextPage = (page: number) => {
    if (page <= 0 || page === totalCount) return;
    setPage(page);
  };

  return (
    <div css={QuizQuestion.container}>
      <ProgressBar currentTab={page} maxCount={totalCount} />
      {data.map((value: Quiz.Data, index: number) => {
        return (
          <div
            key={index}
            css={[QuizQuestion.formContainer, page === index + 1 && QuizQuestion.show]}
          >
            <FormUi title={value.question} body={value.question} example={value.example} />
            <div css={QuizQuestion.buttonGroup}>
              {page !== 1 && (
                <Button variant={'gray'} onClick={() => nextPage(page - 1)}>
                  <Typography variant={'body1'} color={'gray'}>
                    이전
                  </Typography>
                </Button>
              )}
              
              <Button variant={'primary'} onClick={() => nextPage(page + 1)}>
                <Typography variant={'body1'} color={'white'}>
                  다음
                </Typography>
              </Button>
            </div>
          
          </div>
        );
      })}
    </div>
  );
};

export default QuizPage;

const QuizQuestion = {
  container: css({
    width: '100%',
    maxWidth: '1000px',
    margin: 'auto',
    padding: '1.25em',
  }),
  formContainer: css({
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
    display: 'none',
  }),
  show: css({
    display: 'inline-block',
  }),
  buttonGroup: css ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100px',
  })
};
