const { body } = require('express-validator');
exports.apiEmailValidation = [
  body('email').isEmail().withMessage('Value must be an Email!'),
  body('body').isString().withMessage('Value must be String!'),
];
