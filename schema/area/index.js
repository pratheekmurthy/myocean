const Joi = require('joi')
const schemas = {
    fetchAreaSchema: Joi.object().keys({
        RegionPK: Joi.number().allow(''),
        AreaPK: Joi.number().allow(''),
        AreaCode: Joi.string().allow('')
    })
};
module.exports = schemas;