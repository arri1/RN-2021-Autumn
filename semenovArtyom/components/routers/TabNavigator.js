import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarStyle: { 
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        height: 45,
        display: 'flex'
      },
      tabBarIcon: ({focused}) => {
        let icon;
        if (icon = focused){
          return <View>
            <Text style={styles.focusedText}>{route.name}</Text>
          </View>
        }
        else{
          return <View>
            <Text style={styles.text}>{route.name}</Text>
          </View>
        }
      },
      headerShown: false,
      tabBarShowLabel: false
    })}>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    color: '#191919',
    fontSize: 19,
  },
  focusedText: {
    fontFamily: 'Arial',
    color: '#00008B',
    fontSize: 19,
  },
});

export default TabNavigator;
