import React, { ChangeEvent, ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { Typography } from '@components/common/typography/Typography';
import theme from '@styles/Theme';
import { CheckForm } from '@components/ui/form/check/CheckForm';

interface Props {
  title: string;
  body: string;
  example: any[];
}

export const FormUi = (props: Props): ReactElement => {
  const { title, body, example } = props;
  const [answer, setAnswer] = useState<string>('');


  return (
    <div css={formUiStyle.container}>
      <div css={formUiStyle.questionTitleWrapper}>
        <Typography variant={'body1'}>{title}</Typography>
      </div>
      <div css={formUiStyle.exampleContainer}>
        {example.map((item) => {
          return (
            <div key={item.exampleId}>
              <CheckForm
                type='radio'
                options={{ answer: item.answer }}
                checked={answer === item.answer}
                onClickHandler={setAnswer}
                onChangeHandler={e => setAnswer(e.target.value)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const formUiStyle = {
  container: css({
    width: '100%',
    border: `1px solid ${theme.colors.line}`,
  }),
  exampleContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    alignItems: 'center',
    columnGap: '1em',
    rowGap: '1em',
    minHeight: '160px'
  }),
  questionTitleWrapper: css({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5em',
    minHeight: '50px',
    borderBottom: `1px solid ${theme.colors.line}`,
  })
};
