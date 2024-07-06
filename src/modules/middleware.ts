import { validationResult } from "express-validator";

export const handleInputErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
  next();
};

export const handleAllErrors = (err, req, res, next) => {
  console.log(err);
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ mesage: "invalid input" });
  } else {
    res.status(500).json({ message: "oops, thats on us" });
  }
};
