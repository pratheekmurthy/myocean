const Joi = require('joi') 
const schemas = { 
  cntrTypeSchema: Joi.object().keys({ 
    cntrPK: Joi.string().allow('')
  })
}; 
module.exports = schemas;