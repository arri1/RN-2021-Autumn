import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/navigator/TabNavigator';
import rnStore from './components/labs/lab4/RNStore'
import { Provider } from 'react-redux';

const rnApp = () => {
  return (
    <Provider store={rnStore}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default rnApp;
