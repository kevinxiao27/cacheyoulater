import { validationResult } from "express-validator";

export function validateResults(req, res, next) {
  const validationErrors = validationResult(req);
  const errorMessages = [];

  for (const e of validationErrors.array()) {
    errorMessages.push(e.msg);
  }

  if (!validationErrors.isEmpty()) {
    return res.status(403).json({ errors: errorMessages });
  }
  next();
}
