const Joi = require('joi')
const schemas = {
    loginSchema: Joi.object().keys({
        userName: Joi.string().allow(''),
        password: Joi.string().allow(''),
        otpValue: Joi.string().allow('')
    }),
    forgotpasswordSchema: Joi.object().keys({
        username: Joi.string().allow(''),
    }),
    trnLoginSchema: Joi.object().keys({
        userName: Joi.string().allow(''),
        password: Joi.string().allow(''),
        otpValue: Joi.string().allow('')
    }),
    resetpasswordSchema1: Joi.object().keys({
        userName: Joi.string().allow(''),
        currentpassword: Joi.string().allow(''),
        newpassword: Joi.string().allow('')
    }),
    deviceaddressSchema: Joi.object().keys({
        deviceAddress: Joi.string().allow(''),
        userName: Joi.string().allow(''),
        deviceId: Joi.string().allow(''),
        clientip: Joi.string().allow(''),
        devicetype: Joi.string().allow(''),
    }),
    updateLogOutSchema: Joi.object().keys({
        userPK: Joi.number().allow(''),
    }),
    deviceaddressUserdetailsSchema: Joi.object().keys({
        deviceaddress: Joi.string().allow(''),
    }),
    otpfailsSchema: Joi.object().keys({
        userName: Joi.string().allow(''),
        password: Joi.string().allow(''),
        otpValue: Joi.string().allow('')
    })
};
module.exports = schemas;