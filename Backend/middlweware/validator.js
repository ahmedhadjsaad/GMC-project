const { check , validationResult} = require ('express-validator')

 exports.registerRules = () => [
    check("name", "Name is required !!!").notEmpty(),
    check("familyName", "FamilyName is required !!!").notEmpty(),
    check("email", "email should be a valid email !!!").isEmail(),
    check("password", "Password should be more than 8 char !!!").isLength({min:4,})
  ];

exports.validator = (req , res , next) => {
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).json({errors:errors.array()})
}  