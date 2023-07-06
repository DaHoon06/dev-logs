import { CSSProperties, ReactElement } from 'react';
import { css } from '@emotion/react';
import { GithubSignInButton } from '@components/sign-in/github';

interface Props {
  styles: { [key: string]: CSSProperties };
}

export const HeaderComponent = (props: Props): ReactElement => {
  const { styles } = props;
  
  const headerStyle = {
    layout: css({
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: 'rgba(23,23,23,0.37)',
      border: '1px solid #383838',
      width: '100%',
      height: styles['baseLayout'].height,
    }),
    container: css({
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px',
    }),
  };

  return (
    <header css={headerStyle.layout}>
      <div css={headerStyle.container}>
        <GithubSignInButton />
      </div>
    </header>
  );
};


