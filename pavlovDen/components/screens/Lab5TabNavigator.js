import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import AuthUser from './authUser';
import RegUser from './regUser';
import PostPlus from './postPlus';

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
            backgroundColor: '#30363d',
            elevation: 5,
          },
        }}>
        <Tab.Screen name="Sing in" component={AuthUser} />
        <Tab.Screen name="Registration" component={RegUser} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#30363d',
  },
  tabBar: {
    backgroundColor: '#484f58',
  },
  tabItem: {
    height: 50 ,
  },
  tabLabel: {
    color: 'white',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
});

export default TopTabNavigator;