import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyle } from '@styles/GlobalStyle';
import theme from '@styles/Theme';
import { ThemeProvider } from '@emotion/react';
import LayoutComponent from '@components/layout/LayoutComponent';
import { SessionProvider } from 'next-auth/react';
import { DehydratedState, QueryClientProvider } from 'react-query';
import { queryClient } from '@libs/query-instance/queryClient';

// export interface AppProps {
//   dehydratedState: DehydratedState;
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider theme={theme}>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </ThemeProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
