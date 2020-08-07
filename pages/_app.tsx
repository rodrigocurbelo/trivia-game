import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../shared/redux/setup/store';

function TriviaGame({ Component, pageProps }) {
  return (
    <Provider store={configureStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default TriviaGame;
