import { QueryCache, QueryClient } from 'react-query';

const queryErrorHandler = (error: unknown): void => {
  const message = error instanceof Error ? error.message : 'ERROR,';
  console.log(message);
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
      useErrorBoundary: true,
      cacheTime: 60 * 60 * 1000 * 24,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});
