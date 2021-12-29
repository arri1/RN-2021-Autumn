import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/routers/tabs';
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;