import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import News from '../screens/News';
import Arts from '../screens/Arts';
import Lab3 from '../screens/Lab3';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Arts" component={Arts}/>
            <Tab.Screen name="News" component={News}/>
            <Tab.Screen name="Lab3" component={Lab3}/>
        </Tab.Navigator>
    );
};

export default Tabs;