import {CSSProperties, ReactElement, ReactNode} from "react";
import {HeaderComponent} from "@components/layout/HeaderComponent";
import {AsideComponent} from "@components/layout/AsideComponent";
import {css} from "@emotion/react";

interface Props {
  children: ReactNode
}

const styles: { [key: string]: CSSProperties } = {
  baseLayout: {
    height: '80px'
  }
}

const LayoutComponent = (props: Props): ReactElement => {
  const { children } = props;
  return (
    <div>
      <HeaderComponent styles={styles} />
      <AsideComponent />
      <main css={layoutStyle.container}>
        {children}
      </main>
    </div>
  )
}

export default LayoutComponent;

const layoutStyle = {
  container: css({
    marginLeft: '120px',
    marginTop: styles['baseLayout'].height,
    width: '100%',
    height: '100%'
  })
}