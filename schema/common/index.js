const Joi = require('joi')
const schemas = {
    formPref: Joi.object().keys({
        userName: Joi.string().required(),
        password: Joi.string().required(),
        otpValue: Joi.string()
    })
};
module.exports = schemas;