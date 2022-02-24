import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from './components/store';
import { ApolloProvider } from '@apollo/client'
import client from "./components/utils/apollo"
import Way from "./navigation/way";
import First from "./components/screens/First";
import Reg from "./components/screens/Reg";
import Auth from "./components/screens/Auth";
import Tabs from "./navigation/tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="first"
                component={First}
            />
            <Stack.Screen
                name="auth"
                component={Auth}
            />
            <Stack.Screen
                name="reg"
                component={Reg}
            />
            <Stack.Screen
                name="tab"
                component={Tabs}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
