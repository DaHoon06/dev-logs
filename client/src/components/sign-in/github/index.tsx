import { Icon } from "@components/common/icons/Icon";
import { ReactElement, useEffect, useState } from "react";
import styles from './github.module.scss';
import useUserStore from "../../../store/user.store";

export const GithubSignInButton = ():ReactElement => {
  const {isLogin} = useUserStore();
  const [popup, setPopup] = useState<any>();

  useEffect(() => {
    console.log('로그인 롸?' , isLogin);
  }, [isLogin])

  const githubLogin = async (): Promise<void> => {
    try {
      const width = 425;
      const height = 625;
      const left = Math.ceil((window.screen.width - width) / 2);
      const top = Math.ceil((window.screen.height - height) / 2);
      const options = `top=${top}, left=${left}, width=500, height=800, status=no, menubar=no, toolbar=no, resizable=no`;
      const popup = window.open(`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`, 'github-authorization', options)
      setPopup(popup);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const searchParams = new URL(currentUrl).searchParams;
    const code = searchParams.get("code");
    if (code) {
      window.opener.postMessage({ code }, window.location.origin);
    }
  }, [])

  useEffect(() => {
    if (!popup) return;
    const githubOAuthCodeListener = (e) => {
      if (e.origin !== window.location.origin) {
        return;
      }
      popup?.close();
      setPopup(null);
    };

    window.addEventListener("message", githubOAuthCodeListener, false);
    return () => {
      window.removeEventListener("message", githubOAuthCodeListener);
      popup?.close();
      setPopup(null);
    };
  }, [popup])

  return (
    <button onClick={githubLogin}>
      <Icon className={styles.icon} type={'github'} alt={'github'} width={36} height={36} />
    </button>
  )
}