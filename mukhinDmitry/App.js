import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/navigator/TabNavigator';
import rnStore from './components/labs/lab4/RNStore'
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import client from './components/apollo/apollo'

const apollo = new ApolloClient({
  uri: 'https://nefu-server.herokuapp.com/',
  cache: new InMemoryCache(),
})

const rnApp = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={rnStore}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default rnApp;
