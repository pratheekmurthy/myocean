const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    userfk: Joi.number(),
  }),

  fetchDDVoyageSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),

  fetchDDInvoiceSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),

  fetchDDReceiptSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    invoicefks: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
};
module.exports = schemas;
