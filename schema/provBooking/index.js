const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    userfk: Joi.number(),
  }),

  fetchDDVoyageSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    bkgtype: Joi.string().allow(""),
    ServiceDefintionFK: Joi.string().allow(""),
  }),
  fetctDDServiceSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    bkgtype: Joi.string().allow(""),
  }),

  fetchDDPOLSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    bkgtype: Joi.string().allow(""),
    ServiceDefintionFK: Joi.string().allow(""),
    CSHFKs: Joi.string().allow(""),
    bkgstatus: Joi.string().allow(""),
  }),
  fetchDDPODSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    bkgtype: Joi.string().allow(""),
    ServiceDefintionFK: Joi.string().allow(""),
    CSHFKs: Joi.string().allow(""),
    bkgstatus: Joi.string().allow(""),
    POLTerFKs: Joi.string().allow(""),
    PODTerFKs: Joi.string().allow(""),
  }),
  fetchDDBookingSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    bkgtype: Joi.string().allow(""),
    ServiceDefintionFK: Joi.string().allow(""),
    CSHFKs: Joi.string().allow(""),
    bkgstatus: Joi.string().allow(""),
    POLTerFKs: Joi.string().allow(""),
    PODTerFKs: Joi.string().allow(""),
  }),
};
module.exports = schemas;
