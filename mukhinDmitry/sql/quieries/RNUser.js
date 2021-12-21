import { gql } from "@apollo/client";

export const GET_ME=gql`
    query  {
        findOneUser(where: {login: {equals: $login}}) {
            id
            login
            name
            group
        }
    }
`