import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
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
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', top: 25 }}
                  source={require('./NavigatorImg/star2.png')}
                />
              );
            },
          }}
        />
      <Tab.Screen
          name="  "
          component={Lab2}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', top: 25 }}
                  source={require('./NavigatorImg/bubble2.png')}
                />
              );
            },
          }}
        />
      <Tab.Screen
          name="   "
          component={Lab3}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                style={{alignItems: 'center', justifyContent: 'center', top: 25 }}
                  source={require('./NavigatorImg/heart2.png')}
                />
              );
            },
          }}
        />
    </Tab.Navigator>
  );
};

export default TabNavigator;