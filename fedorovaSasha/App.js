import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './components/routers/TabNavigator';
import store from './store';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import client from './components/apollo/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
