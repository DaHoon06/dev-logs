import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import { css } from '@emotion/react';

const ImageWrapper = {
  wrapper: css({
    width: '100%',

    '& > span': {
      position: 'unset',

      '& .image_auto': {
        objectFit: 'contain',
        position: 'relative',
        height: 'auto',
      },
    },
  }),
};

export const NextImage = (props: ImageProps): ReactElement => {
  return (
    <div css={ImageWrapper.wrapper}>
      <Image {...props} layout={'fill'} className={'image_auto'} />
    </div>
  );
};
