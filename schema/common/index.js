const Joi = require('joi')
const schemas = {
    formPref: Joi.object().keys({
        UserFK: Joi.string().required(),
        FormFK: Joi.string().required()
    })
};
module.exports = schemas;