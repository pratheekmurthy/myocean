const Joi = require('joi') 
const schemas = { 
    emailUnReadSchema: Joi.object().keys({ 
        userpk: Joi.string().required(), 
        folderfk: Joi.string().required()
  })
}; 
module.exports = schemas;