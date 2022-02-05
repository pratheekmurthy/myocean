const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
  }),

  fetchDDServiceSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
    carrierpk: Joi.number(),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
  fetchDDVoyageSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
    carrierpk: Joi.number(),
    servicedefinitionfk: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),

  fetchDDPolSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
    carrierpk: Joi.number(),
    servicedefinitionfk: Joi.string().allow(""),
    cshfks: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
  fetchDDBookingSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
    carrierpk: Joi.number(),
    servicedefinitionfk: Joi.string().allow(""),
    cshfks: Joi.string().allow(""),
    polfks: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
};
module.exports = schemas;
