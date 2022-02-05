const Joi = require('joi')


const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
    }),
    fetchDDPolSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
    }),
    fetchDDPolTerminalSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        polfks: Joi.string().allow(''),
    }),
    fetchDDVoyageSchema : Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        polfks: Joi.string().allow(''),
        polterfks: Joi.string().allow(''),

    }),
    fetchDDCustomerSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        polfks: Joi.string().allow(''),
        polterfks: Joi.string().allow(''),
        cshfks: Joi.string().allow(''),

    }),
    fetchDDComGrpSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        polfks: Joi.string().allow(''),
        polterfks: Joi.string().allow(''),
        cshfks: Joi.string().allow(''),
        customerfks: Joi.string().allow(''),

    }),
  
};
module.exports = schemas;

