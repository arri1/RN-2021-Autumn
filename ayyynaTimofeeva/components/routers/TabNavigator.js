import React from 'react';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lab1" component={Lab1} />
            <Tab.Screen name="Lab2" component={Lab2} />
        </Tab.Navigator>
    );
};

export default TabNavigator; 