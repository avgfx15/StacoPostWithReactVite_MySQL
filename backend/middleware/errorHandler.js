export const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    successStatus: false,
    statusCode,
    message,
  });
};

export const CustomErrorHandler = (message, statusCode) => {
  return new Error(message, statusCode);
};
