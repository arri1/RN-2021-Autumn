import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'https://nefu-server.herokuapp.com',
  cache: new InMemoryCache()
})

const REGISTER_QUERY = gql`
  mutation createOne($login: String!, $password: String!, $name: String) {
    registerUser(data: { login: $login, password: $password, name: $name }) {
      token
      user {
        id
        name
        group
        login
      }
    }
  }
`

const AUTH_QUERY = gql`
  mutation authOne($login: String!, $password: String!) {
    authUser(data: { login: $login, password: $password }) {
      token
      user {
        id
        name
        group
        login
      }
    }
  }
`

export {
  apolloClient,
  REGISTER_QUERY,
  AUTH_QUERY
}