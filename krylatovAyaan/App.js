import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store';
import {ApolloProvider} from '@apollo/client';
import client from './components/lab5/client';
import Main from './components/routers/main';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
