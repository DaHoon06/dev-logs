import Image from 'next/image';
import { ComponentProps, ReactElement } from 'react';
import classNames from 'classnames';

type IconType = 'github';

interface Props extends ComponentProps<'span'> {
  type: IconType;
  alt: string;
  width?: number;
  height?: number;
}

const iconSwitch = (props: Props): ReactElement | void => {
  const { type, alt, width = 44, height = 44, className } = props;
  switch (type) {
    case 'github':
      return (
        <Image
          className={className}
          priority={true}
          src={'/images/github.svg'}
          alt={alt}
          width={width}
          height={height}
        />
      );
    default:
      break;
  }
};

export const Icon = (props: Props): ReactElement => {
  const { className } = props;
  return <span className={classNames(className)}>{iconSwitch(props) || undefined}</span>;
};
