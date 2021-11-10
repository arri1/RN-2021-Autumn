import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Login from "../screens/Login"
import Posts from "../screens/Posts"

const Tab = createBottomTabNavigator()

const createScreenOptions = (title) => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: "#0F044C",
      shadowColor: 'transparent',
      height: 70
    },
    headerTitleStyle: {
      marginTop: 12,
      marginLeft: 12,
      color: '#EEEEEE',
      fontSize: 36,
      fontWeight: "bold"
    },
  }
}

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={(route) => ({
          tabBarStyle: { 
            position: 'absolute',
            backgroundColor: '#0F044C',
            borderTopWidth: 0
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            if (route.route.name === 'Lab 1') {
              return <Icon name={focused ? "ios-person" : "ios-person-outline"} color={'#EEEEEE'} size={24}/> 
            }
            if (route.route.name === 'Lab 2') {
              return <Icon name={focused ? "information-circle" : "information-circle-outline"} color={'#EEEEEE'} size={28}/> 
            }
         },
        })}>
        <Tab.Screen 
          name={"Lab 1"}
          component={Login}
          options={createScreenOptions('Sign In')}/>
        <Tab.Screen 
          name={"Lab 2"} 
          component={Posts} 
          options={createScreenOptions('Feed')}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator