import {CSSProperties, ReactElement} from "react";
import { css } from '@emotion/react'

interface Props {
  styles: { [key: string]: CSSProperties };
}

export const HeaderComponent = (props: Props): ReactElement => {
  return (
    <header css={headerStyle.layout}>
      <div css={headerStyle.container}>
        <ul css={headerStyle.list}>
          <li>
            <span css={headerStyle.button1} />
          </li>
          <li>
            <span css={headerStyle.button2} />
          </li>
          <li>
            <span css={headerStyle.button3} />
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
  container: css({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px'
  }),
  list: css({
    width: '100%',
    display: 'flex',

    li: css({
      marginRight: '4px'
    })
  }),
  button1: css({
    display: 'inline-block',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#FD665E',
  }),
  button2: css({
    display: 'inline-block',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#FFD449',
  }),
  button3: css({
    display: 'inline-block',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#62C347',
  }),
};