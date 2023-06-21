import React from 'react';
import type { AppProps } from 'next/app'
import {globalStyle} from "@styles/GlobalStyle";
import theme from "@styles/Theme";
import {ThemeProvider} from "@emotion/react";
import LayoutComponent from "@components/layout/LayoutComponent";
import {AuthProvider} from "../hooks/useAuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </ThemeProvider>
      </AuthProvider>
    </>
  )}
