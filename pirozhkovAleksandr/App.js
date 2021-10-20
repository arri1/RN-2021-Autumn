import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from './components/routers/TopTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}
