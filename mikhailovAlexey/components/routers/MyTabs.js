import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/styles'

import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions = {{
        tabBarShowLabel: false,
        tabBarStyle: styles.navBarBox,
        headerStyle: {
          backgroundColor: '#454545',
          height: 60,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'Montserrat-Regular',
          color: 'white'
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Lab1}
        options = {{
          tabBarIcon: () => (
            <View style={styles.navBarIcon}>
              <Text style={styles.navBarIconText}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Screen2" 
        component={Lab2}
        options = {{
          tabBarIcon: () => (
            <View style={styles.navBarIcon}>
              <Text style={styles.navBarIconText}>HOME</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;