import { z } from "zod"

export const setPresentSchema = z.object({
    link: z.string()
        .nonempty('O link é obrigatório!'),
    urlImg: z.string()
        .nonempty('O link é obrigatório!'),
    name: z.string()
        .nonempty('O link é obrigatório!'),
    price: z.string()
        .nonempty('O link é obrigatório!'),
})

export type setPresentData = z.infer<typeof setPresentSchema>

export const setAssociatePresentUserSchema = z.object({
    presentId: z.number(),
    userId: z.number()
})

export type setAssociatePresentUserData = z.infer<typeof setAssociatePresentUserSchema>


export const deleteAssociatePresentUserSchema = z.object({
    userPresentId: z.number()
})

export type deleteAssociatePresentUserData = z.infer<typeof deleteAssociatePresentUserSchema>