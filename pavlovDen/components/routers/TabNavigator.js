import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

<Tab.Navigator
      headerMode="none"
      screenOptions={{
        tabBarLabelStyle: {
          color: '#5CBDDB',
          fontSize: 20,
          height: 55,
          fontWeight: 'bold',
          textAlignVertical: 'center',
        },
        tabBarItemStyle: {
          margin: 10,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#FFFFFF',
        },
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
          name=" "
          component={Lab1}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', height: 50, width: 50, top: 30 }}
                  source={require('./NavigatorImg/1.png')}
                />
              );
            },
          }}
        />
      <Tab.Screen
          name="  "
          component={Lab2}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', height: 50, width: 50, top: 30 }}
                  source={require('./NavigatorImg/2.png')}
                />
              );
            },
          }}
        />
    </Tab.Navigator>
  );
};

export default TabNavigator;