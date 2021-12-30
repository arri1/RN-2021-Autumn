import React from 'react';
import Registration from '../lab5/registration';
import Authorization from '../lab5/authorization';
import { createStackNavigator } from '@react-navigation/stack';
import NewPost from '../lab5/newPost';
import Update from '../lab5/update';
import TabNavigator from '../routers/TabNavigator';

const Stack = createStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Authorization"
                component={Authorization}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="NewPost"
                component={NewPost}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Update"
                component={Update}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Registration"
                component={Registration}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Main;