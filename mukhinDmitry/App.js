import React from 'react';
import rnLab1 from './components/labs/lab1/Lab1';
import rnLab2 from './components/labs/lab2/Lab2';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/navigator/TabNavigator';

const rnApp = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default rnApp;
