import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


import TabNavigator from "./components/routers/TabNavigator";
import Store from "./components/common/Store";


const client = new ApolloClient({
    uri: 'https://nefu-server.herokuapp.com/',
    cache: new InMemoryCache()
});

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