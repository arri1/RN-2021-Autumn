import React from 'react';
import { Provider } from 'react-redux'
import TabNavigator from './components/routers/TabNavigator';
import { store } from './components/store/watch'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo/apollo';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    </ApolloProvider>
  )
};

export default App;