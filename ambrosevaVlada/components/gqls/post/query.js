import {gql} from '@apollo/client';

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
