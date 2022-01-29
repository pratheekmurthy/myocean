const Joi = require('joi')
const schemas = {
    activeSurRptSchema: Joi.object().keys({
        userfk: Joi.number().allow('')
    })
};
module.exports = schemas;