import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Header } from '@components/layout/Header';
import { css } from '@emotion/react';

interface Props {
  children: ReactNode;
}

const styles: { [key: string]: CSSProperties } = {
  baseLayout: {
    height: '70px',
  },
};

const LayoutComponent = (props: Props): ReactElement => {
  const { children } = props;
  return (
    <>
      <Header styles={styles} />
      <main css={layoutStyle.container}>{children}</main>
    </>
  );
};

export default LayoutComponent;

const layoutStyle = {
  container: css({
    marginTop: styles['baseLayout'].height,
    width: '100%',
    height: '100%',
  }),
};
