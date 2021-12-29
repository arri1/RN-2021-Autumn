import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../screens/lab5/tabLog';
import Login from '../screens/lab5/login';
import Registration from '../screens/lab5/registration';

const Stack = createNativeStackNavigator();

const SignRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Авторизация',
        }} 
        name="Login" 
        component={Login} />
        
      <Stack.Screen 
        options={{
          title: 'Регистрация',
        }} 
        name="Registration" 
        component={Registration} />
      
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SignRouter;