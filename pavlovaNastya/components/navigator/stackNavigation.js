import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './tabs';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SighnIn">
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Tab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;