import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignRouter from './components/routers/SignRouter';
import store from './store';
import client from './components/apollo/apollo';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <SignRouter />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
