import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signIn from '../screens/signin';
import reg from '../screens/reg';
import MyTabs from './MyTabs';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  StatusBar.setHidden(true);
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={signIn} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={reg} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="TabNavigator"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainScreen;
