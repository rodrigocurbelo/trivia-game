import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../shared/networking/apolloClient';
import configureStore from '../shared/redux/setup/store';

function TriviaGame({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={configureStore()}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default TriviaGame;
