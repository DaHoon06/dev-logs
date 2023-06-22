import Image from "next/image";
import { ComponentProps } from "react";
import classNames from "classnames";

import github from '/public/images/github.svg';

type IconType = 'github'

interface Props extends ComponentProps<'span'>{
  type: IconType;
  alt: string;
  width?: number;
  height?: number;
}

const iconSwitch = (props: Props) => {
  const {type, alt, width = 44, height = 44} = props;
  switch (type) {
    case 'github':
      return (<Image layout="intrinsic" src={'/images/github.svg'} alt={alt} width={width} height={height} />);
    default:
      break;
  }
};

export const Icon = (props: Props) => {
  const {className} = props;
  return (
    <span className={classNames(className)}>
      {iconSwitch(props)}
    </span>
  );
};