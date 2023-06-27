import { Icon } from '@components/common/icons/Icon';
import { ReactElement } from 'react';
import styles from './github.module.scss';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
export const GithubSignInButton = (): ReactElement => {
  const { session } = useSession();

  const router = useRouter();

  const githubLogin = async (): Promise<void> => {
    try {
      await router.push(
        `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`,
      );
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    await signIn('github');
  };

  const logout = async () => {
    await signOut();
  };

  return (
    <button onClick={session ? logout : login}>
      <Icon className={styles.icon} type={'github'} alt={'github'} width={36} height={36} />
    </button>
  );
};
