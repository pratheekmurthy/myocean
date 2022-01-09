const Joi = require('joi')
const schemas = {
    terminalSchema: Joi.object().keys({
        terminalpk: Joi.string().allow('')
    })
};
module.exports = schemas;