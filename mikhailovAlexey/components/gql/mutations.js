import {gql} from '@apollo/client';

export const REG = gql`
  mutation createOne($login: String!, $password: String!, $name: String) {
    registerUser(data: {login: $login, password: $password, name: $name}) {
      token
      user {
        id
        name
        group
        login
      }
    }
  }
`;

export const AUTH = gql`
  mutation authOne($login: String!, $password: String!) {
    authUser(data: {login: $login, password: $password}) {
      token
      user {
        id
        name
        group
        login
      }
    }
  }
`;

export const CREPOST = gql`
  mutation ($data: PostCreateInput!) {
    createOnePost(data: $data) {
      id
      title
      text
    }
  }
`;

export const DELPOST = gql`
  mutation ($where: PostWhereUniqueInput!) {
    deleteOnePost(where: $where) {
      title
      text
    }
  }
`;
