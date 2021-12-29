import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Lab5 from '../screens/Lab5';
import UserScreen from '../screens/UserScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Lab5} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
