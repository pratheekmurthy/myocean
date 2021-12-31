const Joi = require('joi') 
const schemas = { 
    fetchDropdownSchema: Joi.object().keys({ 
        searchflag: Joi.string().required(),
        Param3: Joi.number(),
        Param4: Joi.string()
    }),
}; 
module.exports = schemas;