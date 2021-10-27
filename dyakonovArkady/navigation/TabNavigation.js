import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import lab1 from '../screens/lab1';
import lab2 from '../screens/lab2';

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
                component = {lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source = {require('../tabIcons/smile_lab1.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 30,
                                    height: 30,
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
                component = {lab2} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source = {require('../tabIcons/smile_lab2.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text style = {{color: focused ?'#53C1DE' : '#748C94', fontSize: 12}}>
                                    LAB 2
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