import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 5,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 10,
                    height: 70,
                }
            }}
        >
            <Tab.Screen name = "Lab1" component = {Lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab1.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen name = "Lab2" component = {Lab2} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab2.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name = "Lab3" component = {Lab3} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab3.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default TabNavigation;