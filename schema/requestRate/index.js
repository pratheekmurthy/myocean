const Joi = require("joi");
const schemas = {
  fetchDDCarrierSchema: Joi.object().keys({
    userfk: Joi.number().required(),
  }),
  fetchDDPolSchema: Joi.object().keys({}),
  fetchDDPodSchema: Joi.object().keys({}),
  fetchDDVoyageSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    FromPortPks: Joi.string().allow(""),
    ToPortPks: Joi.string().allow(""),
    validfrom: Joi.string().allow(""),
    validto: Joi.string().allow(""),
  }),
  fetchDDCommodityGroupSchema: Joi.object().keys({}),
  fetchDDContainerTypeSchema: Joi.object().keys({}),
  fetchDDCountriesSchema: Joi.object().keys({}),
  validContractExistsSchema: Joi.object().keys({
    userfk: Joi.number(),
    carrierpk: Joi.number(),
    FromPortPks: Joi.string().allow(""),
    ToPortPks: Joi.string().allow(""),
    CshPks: Joi.string().allow(""),
    CmdGrpFks: Joi.string().allow(""),
    CntTypes: Joi.string().allow(""),
    validfrom: Joi.string().allow(""),
    validto: Joi.string().allow(""),
  }),
  fetchMyDetailsSchema: Joi.object().keys({
    userfk: Joi.number(),
    referencefk: Joi.number(),
  }),
};
module.exports = schemas;
