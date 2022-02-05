const Joi = require('joi')
const schemas = {
    activeSurRptSchema: Joi.object().keys({
        userfk: Joi.number().allow('')
    }),
    FetchDDCustomerSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),
        ChargeFKs: Joi.string().allow(''),
        POLPKs: Joi.string().allow(''),
        ChargeType: Joi.string().allow('')
    }),
    FetchDDPodSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),
        ChargeFKs: Joi.string().allow(''),
        POLPKs: Joi.string().allow(''),
        ChargeType: Joi.string().allow('')
    }),
    FetchDDPolSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),
        ChargeFKs: Joi.string().allow(''),
        POLPKs: Joi.string().allow(''),
        ChargeType: Joi.string().allow('')
    }),
    FetchDDSurchargeSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''),
        
    }),
    FetchDDLocalchargeSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''), 
    }),
    FetchDDRebatechargeSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''), 
    }),
    FetchDDCommoditySchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        type: Joi.string().allow(''),
        FromDt: Joi.string().allow(''),
        CommPKs: Joi.string().allow(''), 
    }),

};
module.exports = schemas;




