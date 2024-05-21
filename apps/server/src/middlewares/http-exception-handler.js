export function httpExceptionHandler(err, req, res, next) {
  let message;
  let details;
  let statusCode = 500;
  console.log("err.message");
  try {
    details = JSON.parse(err.message);
    message = details?.message;
    statusCode = err.statusCode;
  } catch (error) {
    message = err.message;
  }
  console.error({ message });
  res.status(statusCode).json({
    error: true,
    statusCode: statusCode,
    message: message,
    details: details,
    timestamp: new Date().toISOString(),
    path: req.url,
  });
}
