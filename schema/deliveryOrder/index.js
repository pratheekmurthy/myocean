const Joi = require('joi')


const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
    }),
    fetchDDVoyageSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
    }),
    fetchDDPODSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        cshpks: Joi.string().allow(''),
    }),
    fetchDDRiverBLSchema : Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        cshpks: Joi.string().allow(''),
        polfks: Joi.string().allow(''),
    }),
    fetchDDDOSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        cshpks: Joi.string().allow(''),
        polfks: Joi.string().allow(''),
        childbookingfks: Joi.string().allow(''),

    }),
   
};
module.exports = schemas;