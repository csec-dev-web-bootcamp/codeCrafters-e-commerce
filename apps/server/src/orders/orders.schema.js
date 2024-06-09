import { z } from "zod";

export const createOrderSchema = z.object({
  totalPrice: z.number().positive(),
  paymentRef: z.string().min(2).max(255),
  userId: z.string().min(2).max(255),
});
