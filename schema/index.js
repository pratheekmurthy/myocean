const Joi = require('joi') 
const schemas = { 
  loginSchema: Joi.object().keys({ 
    userName: Joi.string().required(), 
    password: Joi.string().required(),
    otpValue: Joi.string()
  }), 
  // define all the other schemas below 
  menuSchema: Joi.object().keys({ 
    userpk: Joi.number().required()
  }),
  alertSchema: Joi.object().keys({ 
    userpk: Joi.number().required()
  }),
  resetpasswordSchema: Joi.object().keys({ 
    username: Joi.string().required()
  })
}; 
module.exports = schemas;