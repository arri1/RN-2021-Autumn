import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

const App = function () {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;
