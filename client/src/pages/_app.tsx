import React from 'react';
import type { AppProps } from 'next/app'
import {globalStyle} from "@styles/GlobalStyle";
import theme from "@styles/Theme";
import {ThemeProvider} from "@emotion/react";
import LayoutComponent from "@components/layout/LayoutComponent";
import {AuthProvider} from "../hooks/useAuthContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
      <AuthProvider>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider theme={theme}>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </ThemeProvider>
        </SessionProvider>
      </AuthProvider>
    </>
  )}
