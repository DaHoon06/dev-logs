import {ReactElement} from "react";
import {css} from "@emotion/react";
import { Icon } from "@components/common/icons/Icon";

export const AsideComponent = (): ReactElement => {

  const githubLogin = async () => {
    try {
      const options = 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no';
      window.open(`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`, 'github-authorization', options)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <aside css={asideStyle.layout}>
      <button onClick={githubLogin}>
        TEST
      </button>
      <div css={asideStyle.topContainer}>
        <Icon type={'github'} alt={'github'} width={36} height={36} />
      </div>
      <div css={asideStyle.bottomContainer}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </aside>
  )
}

const asideStyle = {
  layout: css({
    position: 'fixed',
    top: '44px',
    left: '0',
    width: '66px',
    height: '100%',
    backgroundColor: "rgba(23,23,23,0.37)",
    border: '1px solid #383838',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }),
  topContainer: css({
    height: '60px',
    padding: '10px',
    borderBottom: '2px solid #5E5E5E',
  }),
  bottomContainer: css({
    width: '100%',
    height: '100%',
  })
}