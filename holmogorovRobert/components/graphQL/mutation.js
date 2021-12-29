import {gql, useQuery, useMutation} from "@apollo/client"

export const REGISTER_USER = gql`
  mutation RegisterUser($data: RegistrationUserInput!){
    registerUser(data: $data)
    {
      token
    }
  }
`;
export const AUTH_USER = gql`
  mutation AuthUserInput($data:AuthUserInput!){
    authUser(data:$data)
    {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ($data: UserUpdateInput!) {
    updateUser(data: $data) {
      login
      name
      group
    }
  }
`;
