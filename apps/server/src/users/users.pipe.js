export function createUsersPipe(req, res, next) {
  const data = req.body;
  const result = createUserSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateUsersPipe(req, res, next) {
  const data = req.body;
  const result = updateUserSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
