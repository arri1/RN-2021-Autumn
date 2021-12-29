import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './components/routers/TabNavigator';
import { Provider } from "react-redux";
import store from './store/index';
import client from './components/apollo';
import {ApolloProvider} from '@apollo/client';
import NavigationStack from './components/routers/Lab5';


const App = () => {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <NavigationContainer><NavigationStack/>
          </NavigationContainer>
        </Provider>
      </ApolloProvider>
    );
};

export default App;
