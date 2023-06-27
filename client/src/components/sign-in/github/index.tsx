import { Icon } from "@components/common/icons/Icon";
import { ReactElement } from "react";
import styles from './github.module.scss';
import { useRouter } from "next/router";

export const GithubSignInButton = (): ReactElement => {
  const router = useRouter();

  const githubLogin = async (): Promise<void> => {
    try {
      await router.push(`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button onClick={githubLogin}>
      <Icon className={styles.icon} type={'github'} alt={'github'} width={36} height={36} />
    </button>
  )
}