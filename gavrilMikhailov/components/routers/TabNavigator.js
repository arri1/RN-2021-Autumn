import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from "../screens/Login"
import Posts from "../screens/Posts"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Lab 1"} component={Login}/>
        <Tab.Screen name={"Lab 2"} component={Posts}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator