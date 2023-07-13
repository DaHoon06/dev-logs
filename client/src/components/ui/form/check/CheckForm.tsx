import React, { ChangeEvent, ReactElement } from 'react';
import { Button } from '@components/common/button/Button';
import { CheckIcon } from '@components/common/icons';
import { Input } from '@components/common/input/Input';
import { css } from '@emotion/react';

type InputType = 'checkbox' | 'radio'

interface Props {
  options: any;
  type: InputType;
  checked: boolean;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: (payload: string) => void;
}

export const CheckForm = (props: Props): ReactElement => {
  const { options, type = 'checkbox', onChangeHandler, checked, onClickHandler } = props;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler && onChangeHandler(e);
  }

  return (
    <div css={CheckFormStyle.container}>
      <Button className={'mr-6'} variant={'icon'} onClick={() => onClickHandler(options.answer)}>
        <CheckIcon checked={checked} />
      </Button>
      <Input
        value={options.answer}
        id={options.answer}
        name={options.answer}
        label={options.answer}
        checked={checked}
        type={type}
        variant={type}
        onChange={onChangeInput}
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
