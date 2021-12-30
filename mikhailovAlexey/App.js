import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './components/store';
import MainScreen from './components/routers/mainScreen';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://nefu-server.herokuapp.com/',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
