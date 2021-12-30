import React from "react";
import SignUp from "./components/screens/reg";
import SignIn from "./components/screens/signIn";
import FirstScreen from "./components/screens/firstScreen";
import { Provider } from "react-redux";
import store from "./store";
import Tabs from "./navigation/tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar} from "react-native";
import client from "./components/apollo/apollo"
import {ApolloProvider} from "@apollo/client"

const Stack = createNativeStackNavigator();

export default App = () =>{
  StatusBar.setHidden(true);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
              name="firstScreen"
              component={FirstScreen}
            />
            <Stack.Screen
              name="registration"
              component={SignUp}
              options={{ title: "регистрация"}}
            />
            <Stack.Screen
              name="Bxo9"
              component={SignIn}
              options={{ title: "вход"}}
            />
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ title: "tabs"}}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}