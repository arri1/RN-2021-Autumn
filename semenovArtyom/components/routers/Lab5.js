import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/lab51';
import Profile from '../screens/lab53';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const Lab5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Lab5;