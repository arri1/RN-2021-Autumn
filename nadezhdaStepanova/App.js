import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/routers/StackNavigator';
import store from './store';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import client from './components/apollo/apollo';


const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      </ApolloProvider>
    </Provider>  
  );
};

export default App;