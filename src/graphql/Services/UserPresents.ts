import { useMutation, useQuery } from "@apollo/client"
import { TypesGetPresentsResponse } from "../Types/TypesPresents"
import { GET_PRESENTS } from "../Querys/Presents"
import { deleteAssociatePresentUserData, deleteAssociatePresentUserSchema, setAssociatePresentUserData, setAssociatePresentUserSchema } from "../formValidations"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ASSOCIATE_USER_PRESENT_BY_IDS, DELETE_ASSOCIATE_USER_PRESENT_BY_ID } from "../Mutations/UserPresents"
import { TypesAssociationUserPresentResponse, TypesDeleteAssociationUserPresentResponse } from "../Types/TypesUserPresents"

type Props = {
    variables: object
}

export function QueryGetPresents({variables}: Props) {
    const { data, error, loading } = useQuery<TypesGetPresentsResponse>(GET_PRESENTS, {
        variables: {...variables}
    })

    return { data, error, loading }
}


export function MutationAssociatePresentUser() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<setAssociatePresentUserData>({
        resolver: zodResolver(setAssociatePresentUserSchema)
    });

    console.log(errors)

    const [setUserPresent, { loading, data, error }] = useMutation<TypesAssociationUserPresentResponse>(ASSOCIATE_USER_PRESENT_BY_IDS, {
        refetchQueries: [GET_PRESENTS]
    })

    async function FormAssociatePresentUser(data: setAssociatePresentUserData) {
        await setUserPresent({
            variables: {
                presentId: data.presentId,
                userId: data.userId
            }
        })
    }


    return { register, handleSubmit, FormAssociatePresentUser, loading, errors, data, error }
}

export function MutationDeleteAssociatePresentUser() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<deleteAssociatePresentUserData>({
        resolver: zodResolver(deleteAssociatePresentUserSchema)
    });

    console.log(errors)

    const [setUserPresent, { loading, data, error }] = useMutation<TypesDeleteAssociationUserPresentResponse>(DELETE_ASSOCIATE_USER_PRESENT_BY_ID, {
        refetchQueries: [GET_PRESENTS]
    })

    async function FormDeleteAssociatePresentUser(data: deleteAssociatePresentUserData) {
        await setUserPresent({
            variables: {
                userPresentId: data.userPresentId,
            }
        })
    }


    return { register, handleSubmit, FormDeleteAssociatePresentUser, loading, errors, data, error }
}