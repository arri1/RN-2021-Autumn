import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lab2 from "../screens/lab2";
import Article from "../screens/article";

const Stack = createNativeStackNavigator();

const Lab2StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Lab2'
                component={Lab2}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='Article'
                component={Article}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default Lab2StackNavigator;