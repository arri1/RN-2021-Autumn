import {gql} from '@apollo/client';

export const USER = gql`
  query {
    findManyUser(where: {name: {not: {equals: null}}}) {
      id
      name
      login
      group
    }
  }
`;