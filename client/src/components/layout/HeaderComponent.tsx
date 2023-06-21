import {CSSProperties, ReactElement} from "react";
import { css } from '@emotion/react'

interface Props {
  styles: { [key: string]: CSSProperties };
}

export const HeaderComponent = (props: Props): ReactElement => {
  return (
    <header css={headerStyle.layout}>
      <p>header</p>
    </header>
  )
}

const headerStyle = {
  layout: css({
    position: "fixed",
    top: '0',
    left: '120px',
    backgroundColor: 'black',
    width: '100%',
    height: '80px',
  }),
};