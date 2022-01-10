const Joi = require('joi')
const schemas = {
    terminalSchema: Joi.object().keys({
        CountryPK: Joi.string().allow(''),
        LocPK: Joi.string().allow('')
    })
};
module.exports = schemas;