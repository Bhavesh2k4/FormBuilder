import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(4, {message: "Form Name of atleast 4 characters is required"}),
    description: z.string().optional(),
  })

export type formSchemaType=z.infer<typeof formSchema>