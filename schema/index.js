const Joi = require('joi') 
const schemas = { 
  authSchema: Joi.object().keys({ 
    email: Joi.string().email().required(), 
    firstName: Joi.string().alphanum().min(3).required(),
    password: Joi.string().min(4).alphanum().required() 
  }) 
  // define all the other schemas below 
}; 
module.exports = schemas;