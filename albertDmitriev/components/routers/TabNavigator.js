import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Lab1 from "../screens/lab1";
import Lab3 from "../screens/lab3";
import Lab2StackNavigator from "./Lab2StackNavigator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Lab1' 
                component={Lab1}
                options={{
                    tabBarLabel: 'Lab 1',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesignIcons name="home" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen 
                name='Lab2' 
                component={Lab2StackNavigator}
                options={{
                    tabBarLabel: 'Lab 2',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesignIcons name="picture" color={color} size={size} />
                    ),
                  }}  
            />
            <Tab.Screen 
                name='Lab3' 
                component={Lab3}
                options={{
                    tabBarLabel: 'Lab 3',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesignIcons name="save" color={color} size={size} />
                    ),
                  }}  
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;