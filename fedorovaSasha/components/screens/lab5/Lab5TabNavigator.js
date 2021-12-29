import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import AuthUser from './authUser';
import RegUser from './regUser';

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
            backgroundColor: '#8F401A',
            elevation: 5,
          },
        }}>
        <Tab.Screen name="Authorization" component={AuthUser} />
        <Tab.Screen name="Registration" component={RegUser} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },
  tabBar: {
    margin: 15,
    backgroundColor: '#C27E5D',
    borderRadius: 20,
  },
  tabItem: {
    height: 50,
  },
  tabLabel: {
    color: 'white',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
});

export default TopTabNavigator;
