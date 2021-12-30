import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import AuthUser from '../screens/lab5/authUser';
import RegUser from '../screens/lab5/regUser';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const signOut = () => {
  AsyncStorage.setItem('token', '');
};
const MainNavigator = () => {
  return (
    <View style={styles.main}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.tabLabel,
          tabBarItemStyle: styles.tabItem,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: {
            opacity: 0,
          },
        }}>
        <Stack.Screen name="Authorization" component={AuthUser} />
        <Stack.Screen name="Registration" component={RegUser} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
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

export default MainNavigator;
