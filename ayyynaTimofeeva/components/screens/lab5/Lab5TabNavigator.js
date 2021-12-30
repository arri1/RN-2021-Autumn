import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet, Image} from 'react-native';
import AuthUser from './authUser';
import RegUser from './regUser';
import PostPlus from './postPlus';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Tab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();

const TopTabNavigator = () => {
  return (
    <View style={styles.main}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarItemStyle: styles.tabItem,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: {
            elevation: 5,
          },
        }}>
          <Tab.Screen
                name="Авторизация"
                component={AuthUser}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../../images/7.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Регистрация"
                component={RegUser}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../../images/7.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  tabBar: {
    margin: 15,
    backgroundColor: '#9D88B4',
    borderRadius: 10,
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
  icon: {
    width: 30,
    height: 30
}
});

export default TopTabNavigator;