import React from "react";
import Lab1 from "./components/lab1";
import Lab2 from "./components/lab2";
import Main from "./components/main";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="main"
            component={Main}
            options={{title: "Главная"}}
           />
        <Stack.Screen 
          name="lab1"
          component={Lab1}
          options={{title: "Задание 1"}}
           />
        <Stack.Screen 
          name="lab2"
          component={Lab2}
          options={{title: "Задание 2"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
