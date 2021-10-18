import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './components/routers/TabNavigator';
import StackNavigator from './components/routers/StackNavigator';
import TopTabNavigator from './components/routers/TopTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}
