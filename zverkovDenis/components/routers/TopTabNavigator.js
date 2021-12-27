import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import SignIn from '../screens/lab5/signIn';
import SignUp from '../screens/lab5/signUp';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <View style={styles.main}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarItemStyle: styles.tabItem,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: {
            backgroundColor: 'rgba(23,200,115,1)',
            elevation: 5,
          },
        }}
        style={styles.tabNav}>
        <Tab.Screen name="Sign in" component={SignIn} />
        <Tab.Screen name="Sign up" component={SignUp} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 450,
  },

  tabNav: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    margin: 20,
  },

  tabBar: {backgroundColor: '#F9A470'},

  tabItem: {height: 50},

  tabLabel: {
    color: 'black',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
});

export default TopTabNavigator;
