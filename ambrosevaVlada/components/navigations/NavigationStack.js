import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Lab5 from '../screens/Lab5';
import UserPage from '../screens/UserPage';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Lab5} />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
