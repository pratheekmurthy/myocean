const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    userfk: Joi.number().required(),
  }),
  fetchDDTypeSchema: Joi.object().keys({}),
  fetchDDContractSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    type: Joi.string().allow(""),
    validto: Joi.string().allow(""),
  }),
  fetchDDPolSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    type: Joi.string().allow(""),
    contractPks: Joi.string().allow(""),
    validto: Joi.string().allow(""),
  }),
  fetchDDPodSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    type: Joi.string().allow(""),
    contractPks: Joi.string().allow(""),
    FromPortPks: Joi.string().allow(""),
    validto: Joi.string().allow(""),
  }),
  fetchDDVoyageSchema: Joi.object().keys({
    userfk: Joi.number().required(),
    carrierpk: Joi.number().required(),
    type: Joi.string().allow(""),
    contractPks: Joi.string().allow(""),
    FromPortPks: Joi.string().allow(""),
    ToPortPks: Joi.string().allow(""),
    validto: Joi.string().allow(""),
  }),
};
module.exports = schemas;
