import React, { ReactElement, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@pages/index';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

function ProvidersWrapper({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />, { wrapper: ProvidersWrapper });

    jest.mock(
      'next/link',
      () =>
        ({ children, ...rest }: { children: ReactElement }) =>
          React.cloneElement(children, { ...rest }),
    );

    // const heading = screen.getByRole('link', {
    //   name: /TEST\.js!/i,
    // });
    //
    // expect(heading).toBeInTheDocument();

    const test = screen.getByText('TEST');
    expect(test).toBeInTheDocument();
  });
});
