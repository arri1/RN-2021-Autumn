import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Lab1  from '../components/screens/Lab1'
import  Lab2  from '../components/screens/Lab2'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#DDDDDD',
                borderRadius: 15,
                height: 90,
            }
        }}>
        <Tab.Screen name="LAB1" component={Lab1} />
        <Tab.Screen name="LAB2" component={Lab2} />
    </Tab.Navigator>
  );
}

export default Tabs;