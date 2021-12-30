import {gql} from '@apollo/client';

export const GET_USER = gql`
  query {
    user {
      id
      name
      group
      login
    }
  }
`;

export const FIND_MANY_POST = gql`
  query {
    findManyPost {
      id
      title
      text
      user {
        id
        name
      }
    }
  }
`;
