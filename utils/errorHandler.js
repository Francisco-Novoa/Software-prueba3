import { error } from "./logger.js";

export const errorHandler = (err, request, response, next) => {
  if (err.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (err.name === "ValidationError") {
    return response.status(400).json({ error: err.message });
  } else if (err.name === "JsonWebTokenError") {
    return response.status(401).json({
      error: "invalid token",
    });
  }
  error(err.message);
};