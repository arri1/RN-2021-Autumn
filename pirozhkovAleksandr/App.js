import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from './components/routers/TopTabNavigator';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TopTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
