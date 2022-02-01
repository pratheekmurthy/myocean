const Joi = require('joi')


const schemas = {
    fetchDDCarrierSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
    }),
    fetchDDVoyageSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
    }),
    fetchDDInvoiceSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        cshfks: Joi.string().allow(''),
    }),
    fetchCreditNoteListSchema: Joi.object().keys({
        userfk: Joi.number().allow(''),
        carrierpk: Joi.number().allow(''),
        fromdate: Joi.string().allow(''),
        todate: Joi.string().allow(''),
        cshfks: Joi.string().allow(''),
        invoicefks: Joi.string().allow(''),

    }),
  
};
module.exports = schemas;


