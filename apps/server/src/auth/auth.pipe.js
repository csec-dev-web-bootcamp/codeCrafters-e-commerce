import { formatZodError } from "../common/format-zod-error";
import { HttpException } from "../common/http-exception";
import { loginSchema, registerSchema } from "./auth.schema";

export function loginPipe(req, res, next) {
  const data = req.body;
  const result = loginSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function registerPipe(req, res, next) {
  const data = req.body;
  console.log(data);
  const result = registerSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
