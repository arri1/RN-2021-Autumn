import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: '#5CBDDB',
          fontSize: 20,
          height: 55,
          fontWeight: 'bold',
          textAlignVertical: 'center',
        },
        tabBarItemStyle: {
          margin: 10,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#C446DB',
        },
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
