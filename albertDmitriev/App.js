import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { exp } from "react-native-reanimated";
import TabNavigator from "./components/routers/TabNavigator"

const App = () =>{
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}

export default App;