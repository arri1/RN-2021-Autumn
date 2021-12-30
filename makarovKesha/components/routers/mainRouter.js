import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './tabs'
import Login from '../screens/lab5/login'
import SignUp from '../screens/lab5/signup'

const Stack = createStackNavigator()

const MainRouter = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name={'Login'}
                component={Login}
            />
            <Stack.Screen
                name={'Signup'}
                component={SignUp}
            />
            <Stack.Screen
                name={'TabNavigation'}
                component={Tabs}
            />
        </Stack.Navigator>
    )
}
export default MainRouter 