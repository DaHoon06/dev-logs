import { ComponentProps, ReactElement, ReactNode } from 'react';
import { cardUiStyle } from '@components/ui/card/CardUi.style';
import Image from 'next/image';

interface Props extends ComponentProps<'article'> {
  children: ReactNode;
  thumbnail?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const CardUi = (props: Props): ReactElement => {
  const { children, thumbnail } = props;
  return (
    <article css={cardUiStyle.container}>
      {thumbnail && (
        <picture css={cardUiStyle.thumbnail}>
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
          />
        </picture>
      )}
      <div css={cardUiStyle.body}>{children}</div>
    </article>
  );
};
