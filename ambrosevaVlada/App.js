import React from 'react';
import NavContainer from './components/navigations/NavContainer';
import {Provider} from 'react-redux';
import store from './store/store';
import client from './components/utils/apollo';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavContainer />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
