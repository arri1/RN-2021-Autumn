import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Addnewprofile from '../screens/lab5/addnewprofile';
import Login from '../screens/lab5/login';
import Setting from '../screens/lab5/setting';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Lab5"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {backgroundColor: 'orange'},
      }}
    >
      <Tab.Screen
        name="Add new profile"
        component={Addnewprofile}
        options={{ tabBarLabel: 'Add new profile' }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarLabel: 'Login' }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ tabBarLabel: 'Setting' }}
      />  
    </Tab.Navigator>
  );
}

export default MyTabs;