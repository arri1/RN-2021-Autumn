import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/navigator/tabs';

const App = () =>{
 return (
   <NavigationContainer>
     <BottomTab/>
   </NavigationContainer>
 );
};
export default App;