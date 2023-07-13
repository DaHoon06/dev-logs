import React, { ReactElement } from 'react';
import { Button } from '@components/common/button/Button';
import { CheckIcon } from '@components/common/icons';
import { Input } from '@components/common/input/Input';
import { css } from '@emotion/react';

interface Props {
  options: any;
  duplicateKey: () => boolean;
  setAnswerCheck: () => void;
}

export const CheckForm = (props: Props): ReactElement => {
  const { options, setAnswerCheck, duplicateKey } = props;

  return (
    <div css={CheckFormStyle.container}>
      <Button className={'mr-6'} variant={'icon'} onClick={setAnswerCheck}>
        <CheckIcon checked={duplicateKey()} />
      </Button>
      <Input
        id={options.answer}
        name={options.answer}
        label={options.answer}
        checked={duplicateKey()}
        type={'checkbox'}
        variant={'checkbox'}
        onChange={setAnswerCheck}
      />
    </div>
  );
};

const CheckFormStyle = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    padding: '4px',
    height: '4em',
  }),
};
