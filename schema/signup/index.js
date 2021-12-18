const Joi = require('joi') 
const schemas = { 
    fetchSignUpSchema: Joi.object().keys({ 
        userpk: Joi.string().required()
    }),
    fetchLocationsSchema:  Joi.object().keys({ 
        countrypk: Joi.number().required()
    }),
    fetchCustomerSchema: Joi.object().keys({
        custpk:Joi.number().required()
    }),
    fetchValidateEmailSchema: Joi.object().keys({
        email:Joi.string().required()
    }),
    fetchValidateMobileSchema: Joi.object().keys({
        mobile:Joi.string().required()
    }),
    saveUserDetailsSchema: Joi.object().keys({
        userpk:Joi.number(),
        salutation_ifk:Joi.string().required(),
        gen_country_fk:Joi.number().required(),
        dob:Joi.string(),
        first_name:Joi.string(),
        last_name:Joi.string(),
        gen_location_fk:Joi.number(),
        company_type:Joi.string(),
        company_name:Joi.string(),
        company_cus_ref_no:Joi.string(),
        company_designation:Joi.string(),
        company_str_add1:Joi.string(),
        company_str_add2:Joi.string(),
        company_country_fk:Joi.number(),
        company_zipcode:Joi.string(),
        contact_email_add:Joi.string(),
        contact_comfirm_email_add:Joi.string(),
        contact_bus_countrycode:Joi.string(),
        contact_bus_area:Joi.string(),
        contact_bus_tel_no:Joi.string(),
        contact_mob_countrycode:Joi.string(),
        contact_mob_phone_no:Joi.string(),
        contact_mob_city:Joi.string(),
        contact_mob_state:Joi.string(),
        contact_mob_country_fk:Joi.number(),
        contact_mob_zipcode:Joi.string(),
        mailing_add_str_add1:Joi.string(),
        mailing_add_str_add2:Joi.string(),
        mailing_add_city:Joi.string(),
        mailing_add_state:Joi.string(),
        mailing_add_country_fk:Joi.number(),
        mailing_add_zipcode:Joi.string(),
        login_password:Joi.string(),
        login_confirm_password:Joi.string(),
        login_otp_by:Joi.string(),
        notification_required:Joi.bool(),
        alert_required:Joi.bool(),
        recommended:Joi.bool(),
        recommended_emails:Joi.string(),
        subscribed:Joi.bool(),
        terms_conditions:Joi.bool(),
        is_active:Joi.number(),
        created_by_fk:Joi.number(),
        created_on:Joi.string(),
        last_updated_by_fk:Joi.number(),
        last_updated_on:Joi.string(),
        version_no:Joi.number(),
        passwordhash:Joi.string(),
        passwordsalt:Joi.string(),
        username:Joi.string(),
        login_code_number:Joi.string(),
        wrong_pwd_count:Joi.number(),
        enable_otp:Joi.bool(),
        company_fk:Joi.number(),
        usermaster_pk:Joi.number(),
        email_id:Joi.string(),
        mobile_number:Joi.string(),
        office_number:Joi.string(),
        rel_mobile_number:Joi.string(),
        user_image:Joi.string(),
        alias:Joi.string(),
        cust_fk:Joi.number(),
        company_city:Joi.string(),
        company_state:Joi.string(),
        copy_mailing_address:Joi.bool(),
        owner_type:Joi.string()
    }),
    inviteColleagueSchema: Joi.object().keys({
        emailids:Joi.string().required(),
        userName:Joi.string().required()
    })
};
module.exports = schemas;