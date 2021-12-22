import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Lab5 from '../screens/Lab5'
import SignUp from '../screens/SignUp'
import UpdateUser from '../screens/UpdateUser'

const Stack = createStackNavigator();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={Lab5} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Update" component={UpdateUser} />
    </Stack.Navigator>
  );
};

export default SignInNavigator