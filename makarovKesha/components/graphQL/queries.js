import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    findManyUser(where: {name: {not: {equals: null}}}) {
      id
      name
      login
      group
    }
  }
`;

export const POST = gql`
  query {
    post {
      id
      title
      text
    }
  }
`;

export const SHOW_POST = gql`
  query {
    findOnePost(where: {text: {not: {equals: ""}}}) {
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

export const FIND_MANY_POST = gql`
  query ($where: PostWhereInput!) {
    findManyPost(where: $where) {
      id
      title
      text
      userId
    }
  }
`;

export const USER = gql`
  query {
    user {
      id
      name
      group
      login
    }
  }
`;
