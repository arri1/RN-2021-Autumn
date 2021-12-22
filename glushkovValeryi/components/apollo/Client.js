import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
    uri: 'https://nefu-server.herokuapp.com',
});

const authLink = setContext((_, { headers }) => {
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if(value !== null) {
                console.log("from Client")
                console.log(value)
                return value
            }
        } catch(e) {
            console.log(e)
        }
    }
    const token = getData()
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