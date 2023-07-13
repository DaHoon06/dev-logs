import { SelectBox } from '@components/common/selectbox/SelectBox';
import React, { ChangeEvent, ReactElement } from 'react';

interface Props {
  onClickChangeSelectBox: (e: ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  value: string;
  options: any[];
}

export const SelectForm = (props: Props): ReactElement => {
  const { id, value, options, onClickChangeSelectBox } = props;
  return (
    <div>
      <SelectBox id={id} onChange={onClickChangeSelectBox} value={value} options={options} />
    </div>
  );
};
