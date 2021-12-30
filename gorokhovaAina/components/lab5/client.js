import { ApolloClient, InMemoryCache, ApolloLink  } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import fetch from 'node-fetch';
import {createUploadLink} from 'apollo-upload-client';
import {onError} from '@apollo/client/link/error';
import { AsyncStorage } from 'react-native';
import { API_URL } from "./url";

const authLink = setContext(async (_, { headers }) => {
    let token
    if (typeof window !== 'undefined') {
        token = await AsyncStorage.getItem('token')
    }
    return {
        headers: {
            ...headers,
            authorization: token ? token : ''
        }
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        )
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const uploadLink = createUploadLink({
    uri: `${API_URL}`,
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Custom-Header': true
    },
    fetch
});

const link = ApolloLink.from([authLink, errorLink, uploadLink]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

export default client;