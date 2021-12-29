import React from 'react';

import { Provider } from 'react-redux'
import store from './store'

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './components/navigation/StackNavigation';

import { ApolloProvider } from '@apollo/client'
import client from '././components/apollo/apollo'

export default function App () {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StackNavigation />  
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}