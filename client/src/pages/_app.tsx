import type { AppProps } from 'next/app'
import {globalStyle} from "@styles/GlobalStyle";
import theme from "@styles/Theme";
import {ThemeProvider} from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )}
