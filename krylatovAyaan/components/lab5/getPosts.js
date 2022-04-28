import { gql } from '@apollo/client';

export const CREATE_ONE_POST = gql`
    mutation ($data:PostCreateInput!){
        createOnePost(data: $data){
            id
            title
            text
            user{
                id
                name
            }
        }
    }
`;

export const FIND_MANY_POST=gql`
    query {
        findManyPost{
            id
            title
            text
            user{
                id
                name
            }
            userId
        }
    }
`;

export const DELETE_ONE_POST = gql`
  mutation ($where: PostWhereUniqueInput!) {
    deleteOnePost(where: $where) {
      title
      text
    }
  }
`;