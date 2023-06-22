import {CSSProperties, ReactElement} from "react";
import { css } from '@emotion/react'

interface Props {
  styles: { [key: string]: CSSProperties };
}

export const HeaderComponent = (props: Props): ReactElement => {
  return (
    <header css={headerStyle.layout}>
      <div>
        <ul>
          <li>
            <span css={headerStyle.button1} />
          </li>
        </ul>
      </div>
    </header>
  )
}

const headerStyle = {
  layout: css({
    position: "fixed",
    top: '0',
    left: '0',
    backgroundColor: "rgba(23,23,23,0.37)",
    border: '1px solid #383838',
    width: '100%',
    height: '44px',
  }),
  button1: css({
    display: 'inline-block',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '$red',
  })
};