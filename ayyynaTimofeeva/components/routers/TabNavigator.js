import React, { useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import Lab5 from '../screens/lab5/lab5';
import Lab6 from '../../components/screens/lab5/postPlus';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loadItems } from '../../store/tasks';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
    const signOut = () => {
        AsyncStorage.setItem('group', '');
        AsyncStorage.setItem('name', '');
        AsyncStorage.setItem('login', '');
        AsyncStorage.setItem('password', '');
        AsyncStorage.setItem('token', '');
        navigation.replace('Authorization');
    };

    return (
        <View style={styles.main}>
            <Tab.Navigator
            >
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
                <Tab.Screen
                    name="Lab5"
                    component={Lab5}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../../images/5.png')}
                                style={styles.icon}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Posts"
                    component={Lab6}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../../images/6.png')}
                                style={styles.icon}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
            <TouchableOpacity style={styles.buttonLog} onPress={signOut}>
                <Text style={styles.text}>Выйти из системы</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    },
    main: {
        height: '100%',
    },
    buttonLog: {
        position: 'absolute',
        backgroundColor: '#9D88B4',
        borderRadius: 5,
        alignItems: 'center',
        top: 12,
        right: 15,
        height: 30,
        width: 200,
        justifyContent: 'center',
        color: 'white'
    },
    text: {
        color: 'white'
    }
});

export default TabNavigator;