import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';

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
                    height: 10,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen 
                name = "Lab1" 
                component = {Lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {require('../../icons/number_lab1.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen 
                name = "Lab2" 
                component = {Lab2} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {require('../../icons/number_lab2.png')}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'ffffff',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default TabNavigation;