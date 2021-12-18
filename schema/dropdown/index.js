const Joi = require('joi') 
const schemas = { 
    fetchDropdownSchema: Joi.object().keys({ 
        searchflag: Joi.string().required(),
        param3: Joi.number(),
        param4: Joi.string()
    }),
}; 
module.exports = schemas;