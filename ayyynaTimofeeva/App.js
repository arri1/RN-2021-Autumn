import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/routers/TabNavigator';

const App = () => {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
