const Joi = require('joi')
const schemas = {
    fetchCommListSchema: Joi.object().keys({
        CommGrpPK: Joi.number().allow(''),
        HSCode: Joi.string().allow(''),
        commName: Joi.string().allow(''),
        FuzzySearch: Joi.string().allow('')
    })
};
module.exports = schemas;