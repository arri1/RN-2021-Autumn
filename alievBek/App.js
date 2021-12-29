import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import store from './store';
import {Provider} from 'react-redux';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import client from './gqls/apollo/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Tabs />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
