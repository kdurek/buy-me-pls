import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import DefaultLayout from '@/layouts/default';

import '@/app/tailwind.css';

const CustomApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object),
};

CustomApp.defaultProps = {
  pageProps: {},
};

export default CustomApp;
