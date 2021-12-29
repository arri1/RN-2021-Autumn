import React from 'react';
import lab1 from './screens/lab1';
import lab2 from './screens/lab2';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={lab1} />
        <Tab.Screen name="Lab2" component={lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
