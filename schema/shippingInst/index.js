const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    userfk: Joi.number(),
  }),
  fetchDDVoyageSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
  }),
  fetchDDPOLSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    CSHFKs: Joi.string().allow(""),
  }),
  fetchDDPODSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    CSHFKs: Joi.string().allow(""),
    POLTerFKs: Joi.string().allow(""),
  }),
  fetchDDBookingSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    CSHFKs: Joi.string().allow(""),
    POLTerFKs: Joi.string().allow(""),
    PODTerFKs: Joi.string().allow(""),
  }),
};
module.exports = schemas;
