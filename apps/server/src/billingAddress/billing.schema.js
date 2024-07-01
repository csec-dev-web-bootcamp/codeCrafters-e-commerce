import { z } from "zod";

export const createAddressSchema = z.object({
  address: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
});
