import React from 'react';
import { Provider } from 'react-redux'
import AppNavigator from './components/routers/AppNavigator';
import { store } from './components/store/watch'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo/apollo';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    </ApolloProvider>
  )
};

export default App;