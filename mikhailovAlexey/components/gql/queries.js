import {gql} from '@apollo/client';

export const getUsers = gql`
    query findManyUser($log : String){
    findManyUser (
      where: {
        login: {
          contains: $log
      }}
    ) {
      login
      name
    }
  }`;

export const getPosts = gql`
query findManyPost($log: String){
    findManyPost (      
      where: {
        title: {
          contains: $log
        }
      }) {
      id
      title
      text
      user {
        id
        name
        login
      }
    }
  }`;

export const getUser = gql`  
  query findOneUser($log : String){
    findOneUser (
      where: {
        login: $log
      }
    ) {
      id
      login
      name
      group
      posts {
        id
        title
        text
      }
    }
  }
`;
