import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import TabNavigator from "./components/routers/TabNavigator";
import Store from "./components/common/Store";


const App = () => {
    return(
        <Provider store={Store}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App;