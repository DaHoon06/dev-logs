import { CSSProperties, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Logo } from '@components/common/icons/Logo';
import Link from 'next/link';
import { LOCATION } from '@constants/link';

interface Props {
  styles: { [key: string]: CSSProperties };
}

export const Header = (props: Props): ReactElement => {
  const { styles } = props;

  const headerStyle = {
    layout: css({
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ededed',
      boxShadow: '0 0px 10px 0 #d1d1d1',
      width: '100%',
      height: styles['baseLayout'].height,
    }),
    container: css({
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.25em',
    }),
  };

  return (
    <header css={headerStyle.layout}>
      <div css={headerStyle.container}>
        <Link href={LOCATION.HOME}>
          <Logo />
        </Link>
      </div>
    </header>
  );
};
