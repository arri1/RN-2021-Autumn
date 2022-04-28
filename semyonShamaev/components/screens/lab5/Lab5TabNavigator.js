import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import Login from './login';
import Registration from './registration';

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
            backgroundColor: '#000000',
            elevation: 5,
          },
        }}>
        <Tab.Screen name="Authorization" component={Login} />
        <Tab.Screen name="Registration" component={Registration} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  
  tabBar: {
    backgroundColor: '#AEAEAE',
  },

  tabItem: {
    height: 40,
  },

  tabLabel: {
    marginVertical: -12,
    color: '#000000',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
  },
});

export default TopTabNavigator;