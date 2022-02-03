const Joi = require("joi");
const schemas = {
  fetchRegionSchema: Joi.object().keys({
    RegionPK: Joi.number(),
    RegionCode: Joi.string().allow(""),
  }),
};
module.exports = schemas;
