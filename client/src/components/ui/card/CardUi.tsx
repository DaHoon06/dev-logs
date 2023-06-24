import { ComponentProps, ReactElement, ReactNode } from "react";
import { css } from "@emotion/react";

interface Props extends ComponentProps<'article'>{
  children: ReactNode
}

export const CardUi = (props: Props): ReactElement => {
  const { children } = props;
  return (
    <article css={cardStyle.container}>
      {children}
    </article>
  );
};

const cardStyle = {
  container: css({
    width: '100%',
    maxWidth: '600px',
    minWidth: '120px',
    minHeight: '200px',
    height: '100%',
    backgroundColor: "rgba(23,23,23,0.37)",
    border: '1px solid #383838',
    borderRadius: '10px'
  }),
}