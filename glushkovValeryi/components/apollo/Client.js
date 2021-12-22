import {ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useSelector } from 'react-redux';

const httpLink = createHttpLink({
    uri: 'https://nefu-server.herokuapp.com',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    console.log(token)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const Client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default Client; 