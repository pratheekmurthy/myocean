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
  fetchDDPortSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
    carrierpk: Joi.number(),
    servicedefinitionfk: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),

  fetchDDCustomerSchema: Joi.object().keys({
    LoggedInUser: Joi.number(),
    carrierpk: Joi.number(),
  }),
  fetchDDCommoditySchema: Joi.object().keys({
    customerfk: Joi.number(),
    LoggedInUser: Joi.number(),
    polfks: Joi.number(),
    servicedefinitionfk: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
  }),
  fetchPeriodicRptListSchema: Joi.object().keys({
    customerfk: Joi.number(),
    LoggedInUser: Joi.number(),
    polfks: Joi.number(),
    commoditymasterpk: Joi.string().allow(""),
    servicedefinitionfk: Joi.string().allow(""),
    fromdate: Joi.string().allow(""),
    todate: Joi.string().allow(""),
    PageNumber: Joi.number(),
    PageSize: Joi.number(),
    SkipRecords: Joi.number(),
    TotalRecords: Joi.number(),
    EndRecord: Joi.number(),
    ExportFlag: Joi.number(),
  }),
};
module.exports = schemas;
