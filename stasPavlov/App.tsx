import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from './components/Lab1';
import {NavigationContainer} from '@react-navigation/native';
import Lab2 from './components/Lab2';

const Tab = createBottomTabNavigator();

const App:React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
