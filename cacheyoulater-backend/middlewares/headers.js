import { header } from "express-validator";

export const checkHeaders = [
  header("authorization")
    .exists({ checkFalsy: true })
    .withMessage("Missing Authorization Header") // you can specify the message to show if a validation has failed
    .bail() // not necessary, but it stops execution if previous validation failed
    //you can chain different validation rules
    .contains("Bearer")
    .withMessage("Authorization Token is not Bearer"),
];
