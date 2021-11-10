import React from 'react';
import rnLab1 from '../labs/lab1/Lab1';
import rnLab2 from '../labs/lab2/Lab2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            backgroundColor='#5E5E5E'
        >
            <Tab.Screen 
                name="Lab 1" 
                component={rnLab1} 
                options={{
                    title: 'Color lightener',
                    headerStyle: {
                        backgroundColor: '#5E5E5E',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Tab.Screen 
                name="Lab 2"
                component={rnLab2}
                options={{
                    title: 'Color lightener',
                    headerStyle: {
                        backgroundColor: '#5E5E5E',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                />
        </Tab.Navigator>
    )
}

export default TabNavigator
