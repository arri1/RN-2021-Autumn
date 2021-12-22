import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";


import TabNavigator from "./components/routers/TabNavigator";
import Store from "./components/common/Store";
import Client from "./components/apollo/Client";

const App = () => {
    return(
        <ApolloProvider client={Client}>
            <Provider store={Store}>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </Provider>
        </ApolloProvider>
    )
}

export default App;