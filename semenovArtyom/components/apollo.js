import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {setContext} from 'apollo-link-context';
import {AsyncStorage} from 'react-native';

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const httpLink = new HttpLink({
  uri: 'https://nefu-server.herokuapp.com',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': true,
  },
  fetch,
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path}) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authLink, httpLink, errorLink),
});

export default client;