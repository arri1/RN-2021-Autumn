import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';

import Lab1 from '../components/screens/lab1';
import Lab2 from '../components/screens/lab2';
import Lab3 from '../components/screens/lab3';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
              name="Lab1"
              component={Lab1}
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image source={require('../components/icons/1.jpg')} style={styles.img} />
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
                    <Image source={require('../components/icons/2.png')} style={styles.img} />
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
              <Image source={require('../components/icons/3.png')} style={styles.img} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
});

export default Tabs;
