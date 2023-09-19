import ErrorHandler from "../utils/ErrorHandler.js";

export const middlewareError = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  //wrong mongodb Id
  if (err.name === "castError") {
    const message = `Resources not found with this id.. Invalid ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  // Duplicate key value
  if (err.code == 1100) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 404);
  }
  //wrong JWT error
  if (err.name === "jsonwebtokenError") {
    const message = `Your url is invalid plz try again later`;
    err = new ErrorHandler(message, 401);
  }

  // jwt expire
  if (err.name == "jsonwebtokenExpire") {
    const message = `your url is invalid plz try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
