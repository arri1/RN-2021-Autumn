import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from './components/routers/TopTabNavigator';
import {Provider} from 'react-redux';
import store from './store';
import client from './components/utils/apollo';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TopTabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
