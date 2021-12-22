import {ApolloClient, InMemoryCache} from '@apollo/client';

const Client = new ApolloClient({
  uri: 'https://nefu-server.herokuapp.com',
  cache: new InMemoryCache(),
});

export default Client; 