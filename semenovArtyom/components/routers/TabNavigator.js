import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import p1 from '../../img/1.png'
import p2 from '../../img/2.png'
import p3 from '../../img/3.png'
import p4 from '../../img/4.png'
import p5 from '../../img/5.png'
import Lab5 from '../screens/lab52';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarStyle: { 
        position: 'absolute',
        backgroundColor: '#000000',
        height: 45,
        display: 'flex'
      },
      headerShown: false,
      tabBarShowLabel: false
    })}>
      <Tab.Screen name="Lab1" component={Lab1} options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {p1}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    opacity: focused ? 1 : 0.6
                                }}
                            />
                        </View>
                    ),
                }} />
      <Tab.Screen name="Lab2" component={Lab2} options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {p2}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    opacity: focused ? 1 : 0.6
                                }}
                            />
                        </View>
                    ),
                }}/>
      <Tab.Screen name="Lab3" component={Lab3} options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {p3}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    opacity: focused ? 1 : 0.6
                                }}
                            />
                        </View>
                    ),
                }}/>
      <Tab.Screen name="Lab4" component={Lab4} options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {p4}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    opacity: focused ? 1 : 0.6
                                }}
                            />
                        </View>
                    ),
                }}/>
        <Tab.Screen name="Lab5" component={Lab5} options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image 
                                source = {p5}
                                resizeMode = "contain"
                                style={{
                                    width: 50,
                                    height: 50,
                                    opacity: focused ? 1 : 0.6
                                }}
                            />
                        </View>
                    ),
                }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
