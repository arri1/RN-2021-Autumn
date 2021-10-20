import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from "../screens/Login"
import Posts from "../screens/Posts"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => {
        tarBarIcon: ({focused, color, size}) => {
          let iconName
          switch (route.name) {
            case "lab1":
              iconName = "some"
            case "lab2":
              iconName = "some"
          }
          // return <Image source={require(`./${iconName}`)}/>
        }
      }}>
        <Tab.Screen name={"Lab 1"} component={Login}/>
        <Tab.Screen name={"Lab 2"} component={Posts}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator