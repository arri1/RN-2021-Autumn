import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#353A45',
    height: 60,
    width: 390,
    alignSelf: 'center',
    marginLeft: 14,
    marginRight: 14,
  },
  tabItem: {
    margin: 5,
    height: 47,
    borderRadius: 35,
    borderColor: '#9E00FF',
    borderWidth: 3,
  },
  tabLabel: {
    color: '#FAFF00',
    height: 47,
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily: 'chakraPetchBold',
  },
});

function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarStyle: styles.tabBar,
      }}
      style={{backgroundColor: '#353A45'}}>
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab1" component={Lab1} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
