import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().optional(),
  price: z.number().positive(),
  categoryId: z.string().optional(),
  image: z.string().optional(),
  stock: z.number().optional(),
});
