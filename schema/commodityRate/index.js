const Joi = require('joi')


const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
    }),
    fetchDDTypeSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
    }),
    fetchDDCommoditySchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
    }),
    fetchDDChargesSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),

    }),
    fetchDDPolSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),
        ChargeFKs: Joi.string().allow(''),
    }),
    fetchDDPodSchema: Joi.object().keys({
        userfk: Joi.number().required(''),
        carrierpk: Joi.number().required(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),
        ChargeFKs: Joi.string().allow(''),
        POLPKs: Joi.string().allow(''),
    }),
    
};
module.exports = schemas;