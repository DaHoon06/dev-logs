import React, { ReactElement } from 'react';
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
  return (
    <div css={FormUiStyle.container}>
      <Typography variant={'body1'}>{title}</Typography>
      <div css={FormUiStyle.exampleContainer}>
        {example.map((item) => {
          return (
            <div key={item.exampleId}>
              <CheckForm
                options={{ answer: item.answer }}
                duplicateKey={() => false}
                setAnswerCheck={() => {}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FormUiStyle = {
  container: css({
    width: '100%',
    border: `1px solid ${theme.colors.line}`,
  }),
  exampleContainer: css({
    display: 'flex',
  }),
};
