const Joi = require('joi') 
const schemas = { 
    fetchSignUpSchema: Joi.object().keys({ 
        userpk: Joi.string().required()
    }),
}; 
module.exports = schemas;