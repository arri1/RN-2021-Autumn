import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

import Login from "../screens/Login"
import Posts from "../screens/Posts"
import Iterations from "../screens/Iterations"

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
            let icon = require('../../assets/placeholder.png')
            if (route.route.name === 'Lab 1') {
              icon = focused 
                ? require('../../assets/person.fill.png') 
                : require('../../assets/person.png')
            }
            if (route.route.name === 'Lab 2') {
              icon = focused 
                ? require('../../assets/list.bullet.rectangle.portrait.fill.png') 
                : require('../../assets/list.bullet.rectangle.portrait.png')
            }
            if (route.route.name === 'Lab 3') {
              icon = focused 
                ? require('../../assets/cup.and.saucer.fill.png') 
                : require('../../assets/cup.and.saucer.png')
            }
            return <Image source={icon}/>
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
        <Tab.Screen
          name={"Lab 3"}
          component={Iterations}
          options={createScreenOptions('Iterations')}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator