import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/routers/tabs';
import { Provider } from "react-redux";
import store from './store/index';
import client from './components/apollo/apollo';
import { ApolloProvider } from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;