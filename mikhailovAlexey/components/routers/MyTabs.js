import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/styles';

import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';

import homeIcon from '../icons/Home.png';
import dataIcon from '../icons/mess.png';
import timeIcon from '../icons/clock.png';

const Tab = createBottomTabNavigator();

const MyTabs = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navBarBox,
        headerStyle: {
          backgroundColor: '#454545',
          height: 60,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'Montserrat-Regular',
          color: 'white',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Lab1}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={homeIcon}
              style={{
                width: 50,
                height: 50,
                tintColor: focused ? 'white' : '#FFD232',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Data"
        component={Lab2}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={dataIcon}
              style={{
                width: 50,
                height: 50,
                tintColor: focused ? 'white' : '#FFD232',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={Lab3}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={timeIcon}
              style={{
                width: 50,
                height: 50,
                tintColor: focused ? 'white' : '#FFD232',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
