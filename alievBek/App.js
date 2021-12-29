import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import store from './store';
import {Provider} from 'react-redux';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://nefu-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
