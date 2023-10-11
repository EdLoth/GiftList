import { gql } from '@apollo/client'

export const GET_PRESENTS = gql`
  query GetPresents($isSelected: Boolean) {
    GetPresents(isSelected: $isSelected) {
        id
        name
        urlImg
        link
        price
        isSelected
    }
    }
`

export const GET_PRESENTS_BY_USER_ID = gql`
query GetPresentsByUserId($userId: Float!) {
   GetPresentsByUserId(userId: $userId) {
      id
      userId
      presentId
      user {
        id
        name
      }
      present {
        id
        name
      }
    }
  }
`