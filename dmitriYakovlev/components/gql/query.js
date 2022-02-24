import { gql } from "@apollo/client"

export const USER_NAME = gql`
    query {
        user{
            name,
            group
        }
    }
`;