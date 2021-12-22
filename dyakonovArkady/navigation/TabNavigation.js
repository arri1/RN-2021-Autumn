import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

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
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 10,
                    height: 70,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen 
                name = "Lab 1" 
                component = {Lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source = {require('../tabIcons/L1.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 30,
                                    height: 20,
                                    tintColor: focused ?'#53C1DE' : '#748C94'
                                }}
                            />
                            <Text style = {{color: focused ?'#53C1DE' : '#748C94', fontSize: 12}}>
                                    LAB 1
                            </Text>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen 
                name = "Lab 2" 
                component = {Lab2} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source = {require('../tabIcons/L2.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 30,
                                    height: 20,
                                    tintColor: focused ?'#53C1DE' : '#748C94'
                                }}
                            />
                            <Text style = {{color: focused ?'#53C1DE' : '#748C94', fontSize: 12}}>
                                    LAB 2
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen 
                name = "Lab 3" 
                component = {Lab3} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source = {require('../tabIcons/L3.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 30,
                                    height: 20,
                                    tintColor: focused ?'#53C1DE' : '#748C94'
                                }}
                            />
                            <Text style = {{color: focused ?'#53C1DE' : '#748C94', fontSize: 12}}>
                                    LAB 3
                            </Text>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default TabNavigation;