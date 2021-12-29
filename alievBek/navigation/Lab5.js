import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Sign from '../screens/Sign';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Lab5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};

export default Lab5;