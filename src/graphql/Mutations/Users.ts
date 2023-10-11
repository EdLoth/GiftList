import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login($usuario: usuarioLogin!) {
        Login(usuario: $usuario) {
            api_token
            id
            name
        }
    }
`

export const SET_USER = gql`
    mutation SetUser($userBody: bodyUser!) {
        SetUser(userBody: $userBody) {
            id
            name
        }
    }
`