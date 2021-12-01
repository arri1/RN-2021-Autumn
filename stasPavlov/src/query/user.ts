import {gql} from '@apollo/client'

export const FIND_MANY_USER = gql`
  query {
    findManyUser {
      login
      name
    }
  }
`
