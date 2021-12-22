/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import 'react-native-get-random-values'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import React from 'react'

const client = new ApolloClient({
    uri: 'https://nefu-server.herokuapp.com/',
    cache: new InMemoryCache(),
})

const AppContainer = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer)
