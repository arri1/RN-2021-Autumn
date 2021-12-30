import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import Setting from '../screens/lab5/setting';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    return(
        <Tab.Navigator
            screenOptions = {{
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 5,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 10,
                    height: 70,
                }
            }}
        >
            <Tab.Screen name = "Lab1 - useState" component = {Lab1} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab1.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen name = "Lab2 - useEffect" component = {Lab2} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab2.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name = "Lab3 - useMemo" component = {Lab3} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab3.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name = "Lab4 - redux" component = {Lab4} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab4.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name = "Lab5 - graphql add new profile" component = {Setting} 
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image source = {require('../../icons/number_lab5.png')}
                                resizeMode = "contain"
                                style={{width: 60, height: 60,}}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;