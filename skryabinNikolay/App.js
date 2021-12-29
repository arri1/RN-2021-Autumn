import * as React from 'react';
import RootNavigator from './components/routers/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';
import {Provider} from 'react-redux';
import client from './utils/apollo';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
      </Provider>
   </ApolloProvider>
  );
};

export default App;