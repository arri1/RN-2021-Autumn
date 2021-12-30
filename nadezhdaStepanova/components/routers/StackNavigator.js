import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import AuthUser from '../screens/Lab5/authUser';
import RegUser from '../screens/Lab5/regUser';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const signOut = () => {
  AsyncStorage.setItem('token', '');
};

const StackNavigator = () => {
  return (
    <View style={styles.main}>
      <Stack.Navigator
        headerShown="false"
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarItemStyle: styles.tabItem,
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: {
            backgroundColor: '#8F401A',
            elevation: 5,
          },
        }}>
        <Stack.Screen name="Authorization"  component={AuthUser} options={{headerShown: false}}/>
        <Stack.Screen name="Registration" component={RegUser} options={{headerShown: false}}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#5CBDDB',
  },
  tabBar: {
    margin: 15,
    backgroundColor: '#5CBDDB',
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

export default StackNavigator;
