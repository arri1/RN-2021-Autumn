import React, {useState} from "react";
import lab1 from "./components/lab1";
import lab2 from "./components/lab2";
import main from "./components/main";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="main"
            component={main}
            options={{title: "Главная"}}
           />
        <Stack.Screen 
          name="lab1"
          component={lab1}
          options={{title: "Задание 1"}}
           />
        <Stack.Screen 
          name="lab2"
          component={lab2}
          options={{title: "Задание 2"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
