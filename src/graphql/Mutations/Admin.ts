import { gql } from "@apollo/client";

export const PUT_HASH_BY_CPF = gql`
    mutation PutHashAdminByCPF($cpf: String!) {
        PutHashAdminByCPF(cpf: $cpf) {
            id
            nome
        }
    }
`