import React, { useState } from 'react';
import { Image, StyleSheet, Text  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1 from '../screens/Lab1'
import Lab2 from '../screens/Lab2'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return(
        <Tab.Navigator
            screenOptions = {({ route }) => ({
              tabBarIcon: () => {
                  return <Image source = {require("../../img/labIcon.png")} style={styles.icon} />;
              },
              headerStyle: {
                  backgroundColor: '#B68F40',
              },
              headerTitleAlign: 'center',
              tabBarLabel: ({ focused }) => {
                  return <Text style={{
                    color: focused ? "#000000" : "#545454",
                    top: -15
                  }}>
                    {route.name}
                  </Text>
              },
              tabBarStyle: {
                  position: 'absolute',
                  bottom: 25,
                  marginLeft: '5%',
                  elevation: 0,
                  backgroundColor: '#B68F40',
                  borderRadius: 10,
                  height: 80,
                  width: '90%'
              }
            })}
        >
            <Tab.Screen name = "lab1" component = {Lab1} />
            <Tab.Screen name = "lab2" component = {Lab2} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'stretch',
  }
});

export default TabNavigator;