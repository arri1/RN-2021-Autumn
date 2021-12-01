import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TabNavigator from "./components/routers/TabNavigator";

const defaultState = {
    points: 0,
}

const reducer = (state = defaultState, aciton) => {
    switch(aciton.type) {
        case "ADD_POINTS":
            return {...state, points: state.points + aciton.newPoints}
        case "GET_POINTS":
            return {...state, points: state.points - aciton.newPoints}
        default:
            return state
    }
}

const store = createStore(reducer)

const App = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App;