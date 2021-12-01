import {gql} from '@apollo/client';

export const USER = gql`
  query {
    findManyUser {
      id
      name
      group
    }
  }
`;
