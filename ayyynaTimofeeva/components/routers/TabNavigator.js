import React from 'react';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Lab1"
                component={Lab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../images/1.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Lab2"
                component={Lab2}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../images/2.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Lab3"
                component={Lab3}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../images/3.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Lab4"
                component={Lab4}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../images/4.png')}
                            style={styles.icon}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

export default TabNavigator; 