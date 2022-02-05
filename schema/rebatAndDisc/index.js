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

  fetchDDChargeTypeSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),

  fetchDDCommodityGrpSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    chargetypes: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
  fetchDDBookingSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    chargetypes: Joi.string().allow(""),
    comgrpfks: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
};
module.exports = schemas;
