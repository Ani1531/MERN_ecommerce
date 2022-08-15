const { check, validationResult } = require("express-validator");

exports.validateSignUpReq = [
  check("firstName").notEmpty().withMessage("First Name is Required"),
  check("lastName").notEmpty().withMessage("Last Name is Required"),
  check("email").isEmail().withMessage("Email is Not Valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Should be min 6 words"),
  check("contactNumber")
    .isLength({ min: 10, max: 10 })
    .withMessage("Contact Number is not valid"),
];

exports.validateSignInReq = [
  check("email").isEmail().withMessage("Email is Not Valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Should be min 6 words"),
];

exports.isReqValidated = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  next();
};
