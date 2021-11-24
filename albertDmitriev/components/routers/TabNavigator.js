import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Lab1' component={Lab1}/>
            <Tab.Screen name='lab2' component={Lab2}/>
        </Tab.Navigator>
    );
}