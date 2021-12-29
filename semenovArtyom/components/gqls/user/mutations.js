import {gql} from '@apollo/client';

export const SIGN_IN = gql`
  mutation ($data: AuthUserInput!) {
    authUser(data: $data) {
      token
      user {
        id
        login
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation ($data: RegistrationUserInput!) {
    registerUser(data: $data) {
      token
      user {
        id
        login
      }
    }
  }
`;