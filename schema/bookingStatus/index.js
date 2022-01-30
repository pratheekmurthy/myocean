const Joi = require('joi')
const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
    }),
    fetchDDServiceSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow('')
    }),
    fetchDDVoyageSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        servicedefinitionfk: Joi.number().allow('')
    }),
    fetchDDPortSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        servicedefinitionfk: Joi.number().allow(''),
        cshfks: Joi.string().allow('')
    }),
    fetchDDBookingSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        servicedefinitionfk: Joi.number().allow(''),
        cshfks: Joi.string().allow(''),
        portmasterfks: Joi.string().allow('')

    }),
};
module.exports = schemas;
