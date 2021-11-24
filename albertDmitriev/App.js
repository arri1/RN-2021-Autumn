import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "./components/routers/TabNavigator"

export default function App(){
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}