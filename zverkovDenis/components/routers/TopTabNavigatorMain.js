import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import UserProfile from '../screens/lab5/editUser';
import Posts from '../screens/lab5/posts';
import MyPosts from '../screens/lab5/myPosts';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigatorMain = () => {
  return (
    <View style={styles.main}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarItemStyle: styles.tabItem,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: {
            backgroundColor: '#ffffff',
          },
        }}>
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="MyPosts" component={MyPosts} />
        <Tab.Screen name="Profile" component={UserProfile} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {height: '100%'},

  tabBar: {
    backgroundColor: '#F9A470',
    borderWidth: 1,
  },
  tabItem: {
    height: 50,
  },
  tabLabel: {
    color: 'black',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
});

export default TopTabNavigatorMain;
