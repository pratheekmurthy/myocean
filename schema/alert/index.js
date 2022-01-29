const Joi = require('joi')


const schemas = {
    getMessageSchema: Joi.object().keys({
        userId: Joi.number().allow(''),
        id: Joi.number().allow('')
    }),
    getMessagesForUserSchema: Joi.object().keys({
        userpk: Joi.number().allow(''),
        PageNumber: Joi.number().allow(''),
        SkipRecords: Joi.number().allow(''),
        PageSize: Joi.number().allow(''),
        TotalRecords: Joi.number().allow(''),
        EndRecord: Joi.number().allow(''),
        ExportFlag: Joi.number().allow(''),
        status: Joi.string().allow(''), 
    }),
    getMessageThreadSchema: Joi.object().keys({
        userpk: Joi.number().allow(''),
        reciever_fk: Joi.number().allow(''),
    }),
    getParametersSchema: Joi.object().keys({
        msgtemplate_mst_pk: Joi.number().required(''), 
    }),
    getMessageTemplateSchema: Joi.object().keys({
        msgtemplate_mst_pk : Joi.number().required(''),
    }),
    createMessageSchema: Joi.object().keys({
        messagelogpk : Joi.number().allow(''),
        process : Joi.string().allow(''),
        receiver_fk : Joi.number().allow(''),
        message_type : Joi.string().allow(''),
        message_header : Joi.string().allow(''),
        message_body : Joi.string().allow(''),
        action_url : Joi.string().allow(''),
        generated_date : Joi.date().allow(''),
        sent_date : Joi.date().allow(''),
        sent_status : Joi.string().allow(''),
        read_date : Joi.date().allow(''),
        read_status : Joi.string().allow(''),
        action_click_dt : Joi.string().allow(''),
        action_status : Joi.string().allow(''),
        delete_date : Joi.date().allow(''),
        expiry_date : Joi.date().allow(''),
        is_active : Joi.number().allow(''),
        delete_status : Joi.boolean().allow(''),
        expiry_date : Joi.date().allow(''),
        is_active : Joi.number().allow(''),
        created_by_fk : Joi.string().allow(''),
        created_on : Joi.date().allow(''),
        last_updated_by_fk : Joi.date().allow(''),
        version_no : Joi.number().allow(''),
        sender_fk : Joi.number().allow(''),
    }),
    deleteMessageSchema: Joi.array().items({
        "messagelogpk" : Joi.number().allow(''),
        "userpk" : Joi.number().allow(''),
    }),
    clearMessageSchema: Joi.array().items({
        "messagelogpk" : Joi.number().allow(''),
        "userpk" : Joi.number().allow(''),
    }),
    markReadSchema: Joi.array().items({
        "messagelogpk" : Joi.number().allow(''),
        "userpk" : Joi.number().allow(''),
    }),
    updateActionSchema:Joi.array().items({
        "messagelogpk" : Joi.number().allow(''),
        "userpk" : Joi.number().allow(''),
    }),
    saveTemplateSchema: Joi.object().keys({
        "msgtemplate_mst_pk" : Joi.number().allow(''),
        "document_name" : Joi.string().allow(''),
        "config_id" : Joi.string().allow(''),
        "default_email_subject" : Joi.string().allow(''),
        "default_doc_path" : Joi.string().allow(''),
        "default_email_msg" : Joi.string().allow(''),
        "display_order" : Joi.number().allow(''),
        "is_active" : Joi.number().allow(''),
        "created_by_fk" : Joi.number().allow(''),
        "created_on" : Joi.date().allow(''),
        "last_updated_on": Joi.date().allow(''),
        "message_type" : Joi.string().allow(''),
        "default_sms_msg" : Joi.string().allow(''),
        "partytype_ifk" : Joi.string().allow(''),
        "last_updated_by_fk" : Joi.number().allow(''),
        "mcmodule_fk" : Joi.number().allow(''),
        "version_no":Joi.number().allow(''),
        parameterList:Joi.array().items({
            messagefield_pk:Joi.number().allow(''),
            msgtemplate_mst_fk:Joi.number().allow(''),
            active_flag:Joi.number().allow(''),
            is_active:Joi.number().allow(''),
            db_table_name:Joi.string().allow(),
            db_field_name:Joi.string().allow(),
            db_field_desc:Joi.string().allow(),
            created_on:Joi.date().allow(''),
            created_by_fk:Joi.number(),
            last_updated_on: Joi.date().allow(''),
            last_updated_by_fk: Joi.number().allow(''),
            version_no:Joi.number().allow('')
        }),
    }),
   
};
module.exports = schemas;



