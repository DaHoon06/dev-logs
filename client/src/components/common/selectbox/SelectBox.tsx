import React, { ChangeEvent, ComponentProps, ReactElement, useState } from 'react';
import styles from './SelectBox.module.scss';
import { TriangleIcon } from '@components/common/icons';

export interface SelectBox extends ComponentProps<'select'> {
  id: string;
  options: Options[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface Options {
  id: number;
  text: string;
}

export interface SelectOptions {
  value: string;
  name: string;
}

export const SelectBox = (props: SelectBox): ReactElement => {
  const { options, id, onChange, ...rest } = props;
  const [optionValue, setOptionValue] = useState<SelectOptions>({
    value: '',
    name: '',
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value, name } = event.target;
    setOptionValue({ ...optionValue, name, value });
    onChange && onChange(event);
  };

  const iconActive = (): boolean => {
    return optionValue.value.length > 0;
  };

  return (
    <div className={styles.selectbox}>
      <select
        {...rest}
        className={styles.selectbox_container}
        onChange={onChangeHandler}
        required
        name={id}
      >
        <option defaultValue={''} value={''}>
          선택
        </option>
        {options.map((option, index) => {
          return (
            <option value={option.text} key={option.id + index}>
              {option.text}
            </option>
          );
        })}
      </select>
      <TriangleIcon checked={iconActive()} />
    </div>
  );
};
