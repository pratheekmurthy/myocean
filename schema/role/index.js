const Joi = require("joi");
const schemas = {
  fetchRoleSchema: Joi.object().keys({
    CompanyPK: Joi.number(),
    Designations: Joi.string().allow(""),
  }),
  saveRoleSchema: Joi.object().keys({
    roleaccessPk: Joi.number(),
    modulemasterFk: Joi.number(),
    moduleName: Joi.string().allow(""),
    companyFk: Joi.number(),
    departmentFk: Joi.number(),
    departmentId: Joi.string().allow(""),
    designationFk: Joi.number(),
    designationId: Joi.string().allow(""),
    designationName: Joi.string().allow(""),
    isFullAccess: Joi.boolean(),
    isPartialAccess: Joi.boolean(),
    isViewAccess: Joi.boolean(),
    isNoAccess: Joi.boolean(),
    isActive: Joi.number(),
    createdByFk: Joi.number(),
    createdOn: Joi.string().allow(""),
    lastUpdatedByFk: Joi.number(),
    lastUpdatedOn: Joi.string().allow(""),
    versionNo: Joi.number(),
  }),
};
module.exports = schemas;
