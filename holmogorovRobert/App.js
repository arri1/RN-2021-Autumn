import React from "react";
import Lab1 from "./components/lab1";
import Lab2 from "./components/lab2";
import Lab3 from "./components/lab3";
import Main from "./components/main";
import Lab4 from "./components/lab4";
import { Provider } from "react-redux";
import {Store} from "./store/store"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar} from "react-native";
const Stack = createNativeStackNavigator();

export default App = () =>{
  StatusBar.setHidden(true);
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
