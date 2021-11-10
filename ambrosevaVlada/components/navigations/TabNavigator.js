import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';

import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFC',
          width: 393,
          height: 67,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          display: 'flex'
        }
      }}>
      <Tab.Screen
        name="LAB1"
        component={Lab1}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Text style={styles.text}>LAB1</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LAB2"
        component={Lab2}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Text style={styles.text}>LAB2</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
  },
});

export default TabNavigator;
