import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import Lab1 from './screens/Lab1'
import Lab2 from './screens/Lab2'
import Lab3 from './screens/Lab3'
import Lab4 from './screens/Lab4'
import { StyleSheet, View, Text, Image } from 'react-native';
import {Provider} from 'react-redux';
import {store} from './app/store';
import { ApolloProvider } from "@apollo/client";
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

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
  },
});

export default App
