import { ApolloClient, InMemoryCache, createHttpLink, HttpLink } from '@apollo/client'
import { ApolloLink } from '@apollo/client/link/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('token');
    return {
      headers: {
        ...headers,
        "authorization": token || null
      }
    };
  });

const httpLink = new HttpLink({
    uri: 'https://nefu-server.herokuapp.com/',
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Custom-Header': true
        },
})

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
        graphQLErrors.map(({message, locations, path}) =>
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        )
    if (networkError) console.log(`[Network error]: ${networkError}`);
})

const client = new ApolloClient({
    link: authLink.concat(httpLink, errorLink),
    // link: ApolloLink.from([httpLink, authLink]),
    cache: new InMemoryCache()
})

export default client