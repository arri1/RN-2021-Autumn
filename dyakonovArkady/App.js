import React from 'react';

import { Provider } from 'react-redux'
import store from './store'

import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/TabNavigation';

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />  
      </NavigationContainer>
    </Provider>
  );
}