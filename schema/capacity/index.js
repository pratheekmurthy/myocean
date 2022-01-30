const Joi = require('joi')


const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
    }),
    fetchDDPortSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
    }),
    fetchDDServiceSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        PortFks: Joi.string().allow(''),
    }),
    fetchDDVoyageSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        portfks: Joi.string().allow(''),
        servicedeffks: Joi.string().allow(''),
        etddate: Joi.string().allow(''),
    }),
    fetchCapacityListchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        portfks: Joi.string().allow(''),
        servicedeffks: Joi.string().allow(''),
        cshfks: Joi.string().allow(''),
        etddate: Joi.string().allow('')
    })
    
};
module.exports = schemas;