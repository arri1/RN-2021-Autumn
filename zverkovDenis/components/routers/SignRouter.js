import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SignIn from '../screens/lab5/signIn';
import SignUp from '../screens/lab5/signUp';

const Stack = createNativeStackNavigator();

const SignRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SignRouter;
