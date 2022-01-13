const Joi = require('joi')
const schemas = {
    agentSchema: Joi.object().keys({
        countrypk: Joi.string().allow('')
    })
};
module.exports = schemas;