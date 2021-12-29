import { gql } from "@apollo/client";

export const REG = gql`
    mutation ($data:RegistrationUserInput!) {
        registerUser(data: $data) {
            token
            user {
                id
                login
                name
                group
            }
        }
    }
`

export const AUTH = gql`
    mutation ($data:AuthUserInput!) {
        authUser(data: $data) {
            token
            user {
                id
                login
                name
                group
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation ($data:UserUpdateInput!){
        updateUser(data: $data) {
            id
            login
            name
            group
        }
    }
`