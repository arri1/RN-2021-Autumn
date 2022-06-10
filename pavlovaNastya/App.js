import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/navigator/tabs';
import store from './store';
import {Provider} from 'react-redux';

const App = () =>{
 return (
   <Provider store={store}>
     <NavigationContainer>
       <BottomTab/>
     </NavigationContainer>
   </Provider>
 );
};
export default App;