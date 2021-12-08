import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name = "Lab1" 
                component = {Lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {require('../../img/icon1.png')}
                            style = {styles.icon}
                        />
                    ),
                    tabBarLabel: () => {
                        return null
                    },
                }}
            />
            <Tab.Screen 
                name = "Lab2" 
                component = {Lab2}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {require('../../img/icon2.png')}
                            style = {styles.icon}
                        />
                    ),
                    tabBarLabel: () => {
                        return null
                    },
                }}
            />
            <Tab.Screen 
                name = "Lab3" 
                component = {Lab3}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {require('../../img/icon3.png')}
                            style = {styles.icon}
                        />
                    ),
                    tabBarLabel: () => {
                        return null
                    },
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon:{
        width: 35,
        height: 35
    }
});

export default TabNavigator;