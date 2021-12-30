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