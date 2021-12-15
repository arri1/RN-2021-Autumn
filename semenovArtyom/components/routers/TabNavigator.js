import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarStyle: { 
        position: 'absolute',
        backgroundColor: '#000000',
        height: 45,
        display: 'flex'
      },
      tabBarIcon: ({focused}) => {
          return <View>
            <Text style={{fontFamily: 'Arial',fontSize: 19,color: '#FFFFFF', opacity: focused ? 1 : 0.5}}>{route.name}</Text>
          </View>
      },
      headerShown: false,
      tabBarShowLabel: false
    })}>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
