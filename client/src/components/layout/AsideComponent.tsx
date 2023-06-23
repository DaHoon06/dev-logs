import {ReactElement} from "react";
import {css} from "@emotion/react";
import { GithubSignInButton } from "@components/sign-in/github";

export const AsideComponent = (): ReactElement => {
  return (
    <aside css={asideStyle.layout}>

      <div css={asideStyle.topContainer}>
        <GithubSignInButton />
      </div>
      <div css={asideStyle.bottomContainer}>
        <ul css={asideStyle.menuList}>
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
  }),
  menuList: css({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  })
}