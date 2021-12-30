import React, { useEffect } from 'react';
import {
  Image, StatusBar,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loadItems } from '../store/tasks';

import styles from '../styles/styles';

import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import Lab5 from '../screens/lab5';

import homeIcon from '../icons/Home.png';
import dataIcon from '../icons/mess.png';
import timeIcon from '../icons/clock.png';
import checkIcon from '../icons/checked.png';
import noneIcon from '../icons/none.png';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);
  StatusBar.setHidden(true);
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
      <Tab.Screen
        name="Checked"
        component={Lab4}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={checkIcon}
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
        name="Search"
        component={Lab5}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={noneIcon}
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
}

export default MyTabs;
