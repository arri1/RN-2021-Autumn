import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Lab1  from '../components/screens/Lab1'
import  Lab2  from '../components/screens/Lab2'
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

function LabScreen({ navigation }) {
  return (
    <View style={{flex: 1}}>
    <Button title="Go to Lab1" onPress={()=>navigation.navigate('Lab2')}></Button>
    </View>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{style:{backgroundColor: 'yellow'}}}
        >
        <Tab.Screen name="ЛАБ 1" component={Lab1} />
        <Tab.Screen name="ЛАБ 2" component={Lab2} />
    </Tab.Navigator>
  );
}

export default Tabs;