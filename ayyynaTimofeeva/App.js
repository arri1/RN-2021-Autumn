import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './components/screens/lab5/MainNavigator'
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from '@apollo/client';
import client from './components/apollo/apollo';

const App = () => {

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
