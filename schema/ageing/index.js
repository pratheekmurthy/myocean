const Joi = require('joi')

const schemas = {
    FetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        customerfk: Joi.number().allow('')
    }),
    FetchDDLocationSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        fromdate: Joi.string().allow(''),
        customerfk: Joi.number().allow(''),
        todate: Joi.string().allow(''),
        
    }),
    FetchDDVoyageSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        fromdate: Joi.string().allow(''),
        customerfk: Joi.number().allow(''),
        todate: Joi.string().allow(''),
        cshfks: Joi.string().allow('')
    }),
   
};
module.exports = schemas;