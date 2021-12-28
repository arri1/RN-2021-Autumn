import React, { useState } from 'react';
import { Image, StyleSheet, Text  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Lab1 from '../screens/Lab1'
import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'
import Lab4 from '../screens/Lab4'
import Lab5 from '../screens/Lab5'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    
    return(
        <NavigationContainer>
            {isLoggedIn ?(
                <Tab.Navigator
                screenOptions = {({ route }) => ({
                    tabBarIcon: () => {
                        return <Image source = {require("../../img/labIcon.png")} style={styles.icon} />;
                    },
                    headerStyle: {
                        backgroundColor: '#B68F40',
                    },
                    headerTitleAlign: 'center',
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{
                        color: focused ? "#000000" : "#545454",
                        top: -15
                        }}>
                        {route.name}
                        </Text>
                    },
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 25,
                        marginLeft: '5%',
                        elevation: 0,
                        backgroundColor: '#B68F40',
                        borderRadius: 10,
                        height: 80,
                        width: '90%'
                    }
                })}
            >
                <Tab.Screen name = "lab1" component = {Lab1} />
                <Tab.Screen name = "lab2" component = {Lab2} />
                <Tab.Screen name = "lab3" component = {Lab3} />
                <Tab.Screen name = "lab4" component = {Lab4} />
                <Tab.Screen name = "lab5" component = {Lab5} />
            </Tab.Navigator>
                 
            ) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'stretch',
  }
});

export default TabNavigator;