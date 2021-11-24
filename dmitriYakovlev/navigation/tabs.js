import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Lab1  from '../components/screens/Lab1'
import  Lab2  from '../components/screens/Lab2'
import  Lab3  from '../components/screens/Lab3'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="ЛАБ 1" component={Lab1} />
        <Tab.Screen name="ЛАБ 2" component={Lab2} />
        <Tab.Screen name="ЛАБ 3" component={Lab3} />
    </Tab.Navigator>
  );
}

export default Tabs;