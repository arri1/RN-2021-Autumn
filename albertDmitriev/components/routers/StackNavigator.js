import React from "react";
import Lab2ArticleScreen from "../screens/lab2-article-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Lab2 from "../screens/lab2";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Lab2ArticleScreen"
                component={Lab2ArticleScreen}
                options={{title: 'Статья'}}
                />
            <Stack.Screen
                name="Lab2"
                component={Lab2}
                options={{title: 'Статья'}}
                />
        </Stack.Navigator>
    </NavigationContainer>;
}