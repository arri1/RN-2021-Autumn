import React from 'react';
import { Provider } from 'react-redux'
import TabNavigator from './components/routers/TabNavigator';
import { store } from './components/store/watch'
 
const App = () => {
  return (
    <Provider store={store}>
      <TabNavigator/>
    </Provider>
  )
};

export default App;