import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './components/routers/TabNavigator';
import MainRouter from './components/routers/MainRouter';
import store from './redux/store';
import {Provider} from 'react-redux';
import client from './components/utils/apollo';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <MainRouter />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
