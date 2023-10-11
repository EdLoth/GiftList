import { gql } from "@apollo/client";

export const ASSOCIATE_USER_PRESENT_BY_IDS = gql`
    mutation AssociationUserPresent($presentId: Float!, $userId: Float!) {
        associationUserPresent(presentId: $presentId, userId: $userId) {
            id
            presentId
            userId
        }
    }
`

export const DELETE_ASSOCIATE_USER_PRESENT_BY_ID = gql`
    mutation DeleteAssociationUserPresent($userPresentId: Float!) {
        deleteAssociationUserPresent(userPresentID: $userPresentId) {
            id
            present {
            id
            name
            }
            user {
            email
            password
            }
        }
    }
`