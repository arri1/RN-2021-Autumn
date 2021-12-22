import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Lab5 from '../screens/Lab5'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={Lab5} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default SignInNavigator