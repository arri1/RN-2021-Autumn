import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './components/navigations/TabNavigator';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator></TabNavigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
