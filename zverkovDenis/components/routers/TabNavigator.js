import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/lab3';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l1.png')} style={styles.img} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l2.png')} style={styles.img} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../icons/l3.png')} style={styles.img} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
  },
});

export default TabNavigator;
