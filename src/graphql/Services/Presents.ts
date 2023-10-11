import { useMutation, useQuery } from "@apollo/client"
import { TypesGetPresentsResponse, TypesSetPresentResponse } from "../Types/TypesPresents"
import { GET_PRESENTS } from "../Querys/Presents"
import { SET_PRESENT } from "../Mutations/Present"
import { setPresentData, setPresentSchema } from "../formValidations"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
    variables: object
}

export function QueryGetPresents({variables}: Props) {
    const { data, error, loading } = useQuery<TypesGetPresentsResponse>(GET_PRESENTS, {
        variables: {...variables}
    })

    return { data, error, loading }
}


export function MutationSetPresent() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<setPresentData>({
        resolver: zodResolver(setPresentSchema)
    });

    console.log(errors)

    const [setPresent, { loading, data, error }] = useMutation<TypesSetPresentResponse>(SET_PRESENT, {
        refetchQueries: [GET_PRESENTS]
    })

    async function submitForm(data: setPresentData) {
        await setPresent({
            variables: {
                present: {
                    link: data.link,
                    name: data.name,
                    urlImg: data.urlImg
                }
            }
        })
    }


    return { register, handleSubmit, submitForm, loading, errors, data, error }
}