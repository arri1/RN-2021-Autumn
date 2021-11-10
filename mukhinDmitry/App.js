import React, { useState } from 'react';
import rnLab1 from './components/labs/Lab1';
import rnLab2 from './components/labs/Lab2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const rnApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Lab 2">
        <Tab.Screen name="Lab 1" component={rnLab1} />
        <Tab.Screen name="Lab 2" component={rnLab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default rnApp;
