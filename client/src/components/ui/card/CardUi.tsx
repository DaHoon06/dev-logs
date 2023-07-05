import { ComponentProps, ReactElement, ReactNode } from 'react';
import { cardStyle } from '@components/ui/card/CardStyle';

interface Props extends ComponentProps<'article'> {
  children: ReactNode;
}

export const CardUi = (props: Props): ReactElement => {
  const { children } = props;
  return <article css={cardStyle.container}>{children}</article>;
};
