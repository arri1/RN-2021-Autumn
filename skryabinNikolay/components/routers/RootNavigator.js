import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Addnewprofile from '../screens/lab5/addnewprofile';
import Login from '../screens/lab5/login';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddProfile" component={Addnewprofile} />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;