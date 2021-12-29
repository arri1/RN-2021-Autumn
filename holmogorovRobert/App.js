import React from "react";
import Lab1 from "./components/lab1";
import Lab2 from "./components/lab2";
import Lab3 from "./components/lab3";
import Main from "./components/main";
import Lab4 from "./components/lab4";
import Lab5 from "./components/lab5";
import Registration from "./components/registration";
import Auth from "./components/auth";
import FirstScreen from "./components/firstscreen";
import { Provider } from "react-redux";
import {Store} from "./store/store"
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
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
              name="firstscreen"
              component={FirstScreen}
            />
            <Stack.Screen
              name="auth"
              component={Auth}
            />
            <Stack.Screen
              name="registration"
              component={Registration}
            />
            <Stack.Screen 
                name="main"
                component={Main}
                options={{ title: "Главная"}}
              />
            <Stack.Screen 
              name="lab1"
              component={Lab1}
              options={{ title: "Задание 1"}}
              />
            <Stack.Screen 
              name="lab2"
              component={Lab2}
              options={{title: "Задание 2"}}
              />
            <Stack.Screen 
              name="lab3"
              component={Lab3}
              options={{title: "Задание 3"}}
              />
            <Stack.Screen 
              name="lab4"
              component={Lab4}
              options={{title: "Задание 4"}}
              />
            <Stack.Screen 
              name="lab5"
              component={Lab5}
              options={{title: "Задание 5"}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
