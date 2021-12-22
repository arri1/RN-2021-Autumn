import {ApolloClient, InMemoryCache} from '@apollo/client';
import { useSelector } from 'react-redux';

const httpLink = createHttpLink({
    uri: 'https://nefu-server.herokuapp.com',
});

const authLink = setContext((_, { headers }) => {
    const token = useSelector((state) => state.token)
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