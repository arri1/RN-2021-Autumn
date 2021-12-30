import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './components/routers/MyTabs';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
export default App;

