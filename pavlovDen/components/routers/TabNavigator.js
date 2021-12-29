import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';

import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';

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
                    <Image source={require('./NavigatorImg/1.png')} style={styles.img} />
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
                    <Image source={require('./NavigatorImg/2.png')} style={styles.img} />
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
                          <Image source={require('./NavigatorImg/3.png')} style={styles.img} />
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

export default Tabs;