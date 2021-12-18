import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/routers/TabNavigator';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
     return (
          <Provider store={store}>
               <NavigationContainer>
                    <TabNavigator />
               </NavigationContainer>
          </Provider>
     );
};

export default App;