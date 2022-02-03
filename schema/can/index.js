const Joi = require('joi')


const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
    }),
    fetchDDPortSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
    }),
    fetchDDTerminalSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        PortFks: Joi.string().allow(''),
    }),
    fetchDDVoyageSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        PortFks: Joi.string().allow(''),
        TerFKs: Joi.string().allow('')
    }),
    fetchDDRBLSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        PortFks: Joi.string().allow(''),
        CSHFks: Joi.string().allow(''),
        TerFKs: Joi.string().allow('')
    }),
    fetchCANListSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        PortFks: Joi.string().allow(''),
        CSHFks: Joi.string().allow(''),
        TerFKs: Joi.string().allow(''),
        bookingmasterpk: Joi.string().allow('')
    }),
};
module.exports = schemas;