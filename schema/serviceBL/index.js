const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    userfk: Joi.number(),
  }),
  fetchDDVoyageSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
  }),
  fetchDDPolSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
  }),
  fetchDDPolTerminalSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    polfks: Joi.string().allow(""),
  }),
  fetchDDCustomerSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    polfks: Joi.string().allow(""),
    polterfks: Joi.string().allow(""),
  }),
  fetchDDBookingNoSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    polfks: Joi.string().allow(""),
    polterfks: Joi.string().allow(""),
    customerfks: Joi.string().allow(""),
  }),
  fetchDDServiceBLSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    cshfks: Joi.string().allow(""),
    polfks: Joi.string().allow(""),
    polterfks: Joi.string().allow(""),
    customerfks: Joi.string().allow(""),
    bookingfks: Joi.string().allow(""),
  }),
};
module.exports = schemas;
