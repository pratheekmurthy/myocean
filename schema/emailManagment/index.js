const Joi = require('joi') 
const schemas = { 
    emailUnReadSchema: Joi.object().keys({ 
        userpk: Joi.number().allow(''), 
        folderfk: Joi.number().allow('')
  })
}; 
module.exports = schemas;