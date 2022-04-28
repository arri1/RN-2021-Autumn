import {gql} from '@apollo/client';

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

export const GET_POSTS = gql`
  query {
    findManyPost(
      where: {
        AND: {user: {name: {not: {equals: null}}}, text: {not: {equals: ""}}}
      }
    ) {
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

export const POST = gql`
  query {
    post {
      id
      title
      text
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