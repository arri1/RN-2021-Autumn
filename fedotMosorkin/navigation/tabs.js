import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1 from '../components/screens/Lab1';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Lab1" component={Lab1}/>

        </Tab.Navigator>
    );
};

export default Tabs;