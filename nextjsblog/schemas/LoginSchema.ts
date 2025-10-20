import * as z from "zod";

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string().min(6,"password must be 6 or more characters long!")
})

export type LoginSchemaType = z.infer<typeof LoginSchema>