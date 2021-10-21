import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import DropShadow from 'react-native-drop-shadow';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F09389',
    height: 47,
  },
  tabShadow: {
    width: 60,
    color: '#F2EEED',
    fontSize: 18,
    fontFamily: 'latoBold',
    textShadowColor: 'rgba(222,41,41,0.8)',
    shadowOpacity: 1,
    textShadowRadius: 4,
    textShadowOffset: {width: 2, height: 2},
  },
});

function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabShadow,
        tabBarStyle: styles.container,
      }}>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
