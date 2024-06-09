import { formatZodError } from "../common/format-zod-error";
import { HttpException } from "../common/http-exception";
import { createOrderSchema } from "./orders.schema";

export function createOrderPipe(req, res, next) {
  const data = req.body;
  const result = createOrderSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
