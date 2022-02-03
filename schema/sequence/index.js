const Joi = require("joi");
const schemas = {
  fetchSequenceListSchema: Joi.object().keys({
    sequencemasterpk: Joi.number(),
    SearchValue: Joi.string().allow(""),
    sequencecategoryid: Joi.string().allow(""),
    Status: Joi.number(),
    PageNumber: Joi.number(),
    PageSize: Joi.number(),
    SkipRecords: Joi.number(),
    TotalRecords: Joi.number(),
    EndRecord: Joi.number(),
    ExportFlag: Joi.number(),
  }),
  saveSequenceSchema: Joi.object().keys({
    sequencemasterpk: Joi.number(),
    sequencecatgoryfk: Joi.number(),
    sequenceprefix: Joi.string().allow(""),
    prefixseparatorifk: Joi.string().allow(""),
    digittype: Joi.number(),
    seqstartnr: Joi.number(),
    digitseparatorifk: Joi.string().allow(""),
    suffixtype: Joi.number(),
    suffixseparatorifk: Joi.string().allow(""),
    seqoptvalueifk: Joi.string().allow(""),
    defaultvalue: Joi.string().allow(""),
    is_active: Joi.number(),
    created_by_fk: Joi.number(),
    created_on: Joi.string().allow(""),
    last_updated_by_fk: Joi.number(),
    last_updated_on: Joi.string().allow(""),
    version_no: Joi.number(),
    currency_symbol: Joi.string().allow(""),
  }),
  deactivateSequenceSchema: Joi.object().keys({
    sequencemasterpk: Joi.number(),
    searchValue: Joi.string().allow(""),
    sequencecategoryid: Joi.string().allow(""),
    status: Joi.number(),
  }),
  delSequenceSchema: Joi.object().keys({
    sequencemasterpk: Joi.number(),
  }),
};

module.exports = schemas;
