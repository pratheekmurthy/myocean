const Joi = require('joi')
const schemas = {
    terminalSchema: Joi.object().keys({
        CountryPK: Joi.string().allow(''),
        LocPK: Joi.string().allow('')
    }),
    QPORTTerminalDto: Joi.object().keys({
        CntryPK: Joi.number().allow(''),
        LocPK: Joi.number().allow(''),
        TerPK: Joi.number().allow(''),
        pageNumber: Joi.number().default(1),
        pageSize: Joi.number().default(10)
    })
};
module.exports = schemas;