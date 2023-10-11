import { gql } from "@apollo/client";

export const SET_PRESENT = gql`
    mutation SetPresent($present: presentsInput!) {
        SetPresent(present: $present) {
            id
            name
        }
    }
`

export const PUT_PRESENT = gql`
    mutation PutPresent($present: presentsInput!) {
        PutPresent(present: $present) {
            id
            name
        }
    }
`

export const DELETE_PRESENT = gql`
    mutation DeletePresent($present: Float!) {
        DeletePresent(present: $present) {
            id
            name
        }
    }
`