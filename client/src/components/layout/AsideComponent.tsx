import {ReactElement} from "react";
import {css} from "@emotion/react";

export const AsideComponent = (): ReactElement => {
  return (
    <aside css={asideStyle.layout}>
      <p>메뉴</p>
    </aside>
  )
}

const asideStyle = {
  layout: css({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '120px',
    height: '100%',
    backgroundColor: "aliceblue"
  }),
}