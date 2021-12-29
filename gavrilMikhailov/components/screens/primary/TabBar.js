import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Posts from '../Posts'
import Iterations from '../Iterations'
import Eye from '../Eye'
import { Image } from 'react-native'

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

const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator screenOptions={(route) => ({
      tabBarStyle: { 
        position: 'absolute',
        backgroundColor: '#0F044C',
        borderTopWidth: 0
      },
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => {
        let icon = require('../../../assets/placeholder.png')
        if (route.route.name === 'Lab 2') {
          icon = focused 
            ? require('../../../assets/list.bullet.rectangle.portrait.fill.png') 
            : require('../../../assets/list.bullet.rectangle.portrait.png')
        }
        if (route.route.name === 'Lab 3') {
          icon = focused 
            ? require('../../../assets/cup.and.saucer.fill.png') 
            : require('../../../assets/cup.and.saucer.png')
        }
        if (route.route.name === 'Lab 4') {
          icon = focused 
            ? require('../../../assets/wand.and.stars.inverse.png') 
            : require('../../../assets/wand.and.rays.inverse.png')
        }
        return <Image source={icon}/>
      },
      })}>
      <Tab.Screen 
        name={"Lab 2"} 
        component={Posts} 
        options={createScreenOptions('Feed')}/>
      <Tab.Screen
        name={"Lab 3"}
        component={Iterations}
        options={createScreenOptions('Iterations')}/>
      <Tab.Screen
        name={"Lab 4"}
        component={Eye}
        options={createScreenOptions('Eye')}/>
    </Tab.Navigator>
  )
}

export default TabBar