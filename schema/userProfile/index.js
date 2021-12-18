const Joi = require('joi')
const schemas = {
    fetchusers: Joi.object().keys({
        userpk: Joi.number(),
        companypk: Joi.number(),
        deppk: Joi.number(),
        despk: Joi.number(),
        companytype: Joi.string(),
        loggedinuser: Joi.number().required(),
        status: Joi.number(),
        pagenumber: Joi.number(),
        pagesize: Joi.number(),
        skiprecords: Joi.number(),
        totalrecords: Joi.number(),
        endrecord: Joi.number(),
        exportflag: Joi.number(),
    }),
    fetchuserdetails: Joi.object().keys({
        userpk: Joi.number().required()
    }),
    fetchuserrights: Joi.object().keys({
        userpk: Joi.number().required()
    }),
    saveuser: Joi.object().keys({
        email: Joi.string().required()
    }),
    fetchuseraccess: Joi.object().keys({
        userpk: Joi.number(),
        companypk: Joi.number(),
        deppk: Joi.number(),
        despk: Joi.number(),
        companytype: Joi.string(),
        loggedinuser: Joi.number().required(),
        status: Joi.number(),
    }),
    deleteuser: Joi.object().keys({
        userpk: Joi.number(),
    }),
    getuserdropdown: Joi.object().keys({
        companytype: Joi.string(),
        companypk: Joi.number(),
        departmentpk: Joi.number(),
    }),
    fetchuserpreference: Joi.object().keys({
        userpk: Joi.number(),
        companypk: Joi.number(),
        deppk: Joi.number(),
        despk: Joi.number(),
        companytype: Joi.string(),
        loggedinuser: Joi.number().required(),
        status: Joi.number(),
    }),
    printusers: Joi.object().keys({
        userpk: Joi.number(),
        loginpk: Joi.number(),
        usersession_id: Joi.string(),
    })
};
module.exports = schemas;