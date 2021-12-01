import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Lab1' component={Lab1}/>
            <Tab.Screen name='Lab2' component={Lab2}/>
            <Tab.Screen name='Lab3' component={Lab3}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;