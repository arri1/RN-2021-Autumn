import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Lab51 from '../screens/lab51';
import Lab52 from '../screens/lab52';

const Stack = createStackNavigator();

const Lab5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Lab51} />
      <Stack.Screen name="UserPage" component={Lab52} />
    </Stack.Navigator>
  );
};

export default Lab5;