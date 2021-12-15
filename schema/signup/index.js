const Joi = require('joi') 
const schemas = { 
    fetchSignUpSchema: Joi.object().keys({ 
        userpk: Joi.string().required()
    }),
    fetchLocationsSchema:  Joi.object().keys({ 
        countrypk: Joi.int().required()
    }),
    fetchCustomerSchema: Joi.object().keys({
        custpk:Joi.int().required()
    }),
    fetchValidateEmail: Joi.object().keys({
        email:Joi.string().required()
    }),
    fetchValidateMobile: Joi.object().keys({
        mobile:Joi.string().required()
    })
};
module.exports = schemas;