import { Icon } from '@components/common/icons/Icon';
import { ReactElement } from 'react';
import styles from './github.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';

export const GithubSignInButton = (): ReactElement => {
  const { data: session } = useSession();

  const login = async () => {
    await signIn('github');
  };

  const logout = async () => {
    await signOut();
  };

  return (
    <button onClick={session?.user ? logout : login}>
      <Icon className={styles.icon} type={'github'} alt={'github'} width={36} height={36} />
    </button>
  );
};
