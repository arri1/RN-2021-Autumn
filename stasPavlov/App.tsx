import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Lab1 from './src/screens/Lab1'
import {NavigationContainer} from '@react-navigation/native'
import Lab2 from './src/screens/Lab2'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import { colors } from './src/constants/colors'
import GearIcon from './src/components/SVG/GearIcon'
import Lab3 from "./src/screens/Lab3";
import Lab4 from './src/screens/Lab4'

const Tab = createBottomTabNavigator()

const App:React.FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: colors.purple,
                            borderTopColor: colors.darkPurple,
                        },
                        tabBarActiveTintColor: colors.white,
                        tabBarIcon: ({ focused }) => {
                            let iconColor
                            if (route.name === 'Lab1') {
                                iconColor = focused
                                    ? colors.white
                                    : colors.darkGray
                                return <GearIcon color={iconColor}/>
                            }
                            if (route.name === 'Lab2') {
                                iconColor = focused
                                    ? colors.white
                                    : colors.darkGray
                                return <GearIcon color={iconColor}/>
                            }
                            if (route.name === 'Lab3') {
                                iconColor = focused
                                    ? colors.white
                                    : colors.darkGray
                                return <GearIcon color={iconColor}/>
                            }
                            if (route.name === 'Lab4') {
                                iconColor = focused
                                    ? colors.white
                                    : colors.darkGray
                                return <GearIcon color={iconColor}/>
                            }
                        },
                    })}>
                    <Tab.Screen
                        name="Lab1"
                        component={Lab1}
                    />
                    <Tab.Screen
                        name="Lab2"
                        component={Lab2}
                    />
                    <Tab.Screen
                        name="Lab3"
                        component={Lab3}
                    />
                    <Tab.Screen
                        name="Lab4"
                        component={Lab4}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
