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
import { Provider } from "react-redux";
import store from './store/index';
import client from './components/apollo/apollo';
import { ApolloProvider } from '@apollo/client';
import MainRouter from "./components/routers/mainRouter";


const App = () => {

  const [color, setColor] = useState('#2E1F99');

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaView style={styles.main}>
          <NavigationContainer>
            <MainRouter />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#8EDFDD',
  },
});

export default App;