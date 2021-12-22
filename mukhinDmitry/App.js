import React from 'react';
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
