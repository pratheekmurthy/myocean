const Joi = require('joi') 
const schemas = { 
    fetchSignUpSchema: Joi.object().keys({ 
        userpk: Joi.number().required()
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
        dob:Joi.string().allow(''),
        first_name:Joi.string().required(),
        last_name:Joi.string().required(),
        gen_location_fk:Joi.number(),
        company_type:Joi.string().allow(''),
        company_name:Joi.string().allow(''),
        company_cus_ref_no:Joi.string().allow(''),
        company_designation:Joi.string().allow(''),
        company_str_add1:Joi.string().allow(''),
        company_str_add2:Joi.string().allow(''),
        company_country_fk:Joi.number(),
        company_zipcode:Joi.string().allow(''),
        contact_email_add:Joi.string().allow(''),
        contact_comfirm_email_add:Joi.string().allow(''),
        contact_bus_countrycode:Joi.string().allow(''),
        contact_bus_area:Joi.string().allow(''),
        contact_bus_tel_no:Joi.string().allow(''),
        contact_mob_countrycode:Joi.string().allow(''),
        contact_mob_phone_no:Joi.string().allow(''),
        contact_mob_city:Joi.any().allow(''),
        contact_mob_state:Joi.any().allow(''),
        contact_mob_country_fk:Joi.number(),
        contact_mob_zipcode:Joi.any().allow(''),
        mailing_add_str_add1:Joi.string().allow(''),
        mailing_add_str_add2:Joi.string().allow(''),
        mailing_add_city:Joi.string().allow(''),
        mailing_add_state:Joi.string().allow(''),
        mailing_add_country_fk:Joi.number(),
        mailing_add_zipcode:Joi.string().allow(''),
        login_password:Joi.string().allow(''),
        login_confirm_password:Joi.string().allow(''),
        login_otp_by:Joi.string().allow(''),
        notification_required:Joi.number(),
        alert_required:Joi.number(),
        recommended:Joi.number(),
        recommended_emails:Joi.any().allow(''),
        subscribed:Joi.number(),
        terms_conditions:Joi.number(),
        is_active:Joi.number(),
        both:Joi.number(),
        created_by_fk:Joi.number(),
        created_on:Joi.string().allow(''),
        last_updated_by_fk:Joi.number(),
        last_updated_on:Joi.string().allow(''),
        version_no:Joi.number(),
        passwordhash:Joi.string().allow(''),
        passwordsalt:Joi.string().allow(''),
        username:Joi.string().allow(''),
        login_code_number:Joi.string().allow(''),
        wrong_pwd_count:Joi.number(),
        enable_otp:Joi.number(),
        company_fk:Joi.number(),
        usermaster_pk:Joi.number(),
        email_id:Joi.string().allow(''),
        mobile_number:Joi.string().allow(''),
        office_number:Joi.string().allow(''),
        rel_mobile_number:Joi.string().allow(''),
        user_image:Joi.string().allow(''),
        alias:Joi.string().allow(''),
        gen_countyname:Joi.any().allow(''),
        company_countryname:Joi.any().allow(''),
        contract_countryname:Joi.any().allow(''),
        mailing_countryname:Joi.any().allow(''),
        cust_fk:Joi.number(),
        company_city:Joi.string().allow(''),
        company_state:Joi.string().allow(''),
        copy_mailing_address:Joi.number(),
        owner_type:Joi.string().allow(''),
        notificationdtl:Joi.array().items({
            userfk:Joi.number(),
            usernotifypk:Joi.number().allow(''),
            notify_desc_ifk:Joi.string().required(),
            isselected:Joi.number(),
            is_active:Joi.number(),
            created_on:Joi.date().allow(''),
            created_by_fk:Joi.number(),
            last_updated_on: Joi.date().allow(''),
            last_updated_by_fk: Joi.number().allow(''),
            version_no:Joi.number().allow('')
        }),
        alertdtl:Joi.array().items({
            userfk:Joi.number(),
            useralertpk:Joi.number().allow(''),
            alert_desc_ifk:Joi.string().required(),
            isselected:Joi.number(),
            is_active:Joi.number(),
            created_on:Joi.date().allow(''),
            created_by_fk:Joi.number(),
            last_updated_on: Joi.date().allow(''),
            last_updated_by_fk: Joi.number().allow(''),
            version_no:Joi.number().allow('')
        })
    }),
    // notificationdtlSchema: Joi.object().keys({
    //     usernotifypk:Joi.string().required(),
    //     notify_desc_ifk:Joi.string().required(),
    //     isselected:Joi.number(),
    //     is_active:Joi.number(),
    //     created_by_fk:Joi.number()
    // }),
    inviteColleagueSchema: Joi.object().keys({
        Emailids:Joi.string().required(),
        UserName:Joi.string().required()
    }),
    removeUserSchema: Joi.object().keys({
        userPK:Joi.number(),
        status:Joi.number()
    })

 
};
module.exports = schemas;