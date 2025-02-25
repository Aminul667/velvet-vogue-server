import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  }),
});

export default userValidationSchema;
