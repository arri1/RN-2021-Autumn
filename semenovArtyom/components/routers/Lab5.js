import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Lab51 from '../screens/lab51';
import Lab52 from '../screens/lab52';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const Lab5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Lab51} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default Lab5;