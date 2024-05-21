import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(60),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
