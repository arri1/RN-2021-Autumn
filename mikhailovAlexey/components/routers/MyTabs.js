import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/styles'

import Lab1 from '../screens/lab1';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions = {{
        tabBarShowLabel: false,
        tabBarStyle: styles.navBarBox,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Lab1}
        options = {{
          tabBarIcon: ({focused}) => (
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