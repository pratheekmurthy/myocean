const Joi = require("joi");
const schemas = {
  fetchDocListingSchema: Joi.object().keys({
    documentid: Joi.string().allow(""),
    documentname: Joi.string().allow(""),
    documenttypefk: Joi.number(),
    status: Joi.number(),
    PageNumber: Joi.number(),
    PageSize: Joi.number(),
    SkipRecords: Joi.number(),
    TotalRecords: Joi.number(),
    EndRecord: Joi.number(),
    ExportFlag: Joi.number(),
  }),

  fetchDocEntrySchema: Joi.object().keys({
    DocumentPK: Joi.number().required(),
  }),

  fetchDocParameterSchema: Joi.object().keys({}),

  getDocGrpDropdownSchema: Joi.object().keys({}),

  documentSaveSchema: Joi.object().keys({
    documentmaster_pk: Joi.number(),
    document_id: Joi.string().allow(""),
    document_name: Joi.string().allow(""),
    documenttype_fk: Joi.number(),
    documentgroup_fk: Joi.number(),
    document_subject: Joi.string().allow(""),
    document_header: Joi.string().allow(""),
    document_body: Joi.string().allow(""),
    doucment_footer: Joi.string().allow(""),
    messagefolder_fk: Joi.number(),
    is_active: Joi.number(),
    created_by_fk: Joi.number(),
    created_on: Joi.string().allow(""),
    last_updated_by_fk: Joi.number(),
    last_updated_on: Joi.string().allow(""),
    version_no: Joi.number(),
  }),

  fetchWFListingSchema: Joi.object().keys({
    workflowid: Joi.string().allow(""),
    document_name: Joi.string().allow(""),
    username: Joi.string().allow(""),
    status: Joi.number(),
    PageNumber: Joi.number(),
    PageSize: Joi.number(),
    SkipRecords: Joi.number(),
    TotalRecords: Joi.number(),
    EndRecord: Joi.number(),
    ExportFlag: Joi.number(),
  }),

  fetchWorkFlowEntrySchema: Joi.object().keys({
    WorkFlowPK: Joi.number().required(),
    status: Joi.number(),
  }),

  fetchWorkFlowLogSchema: Joi.object().keys({
    WorkFlowPK: Joi.number().required(),
    status: Joi.number(),
  }),

  saveWorkFlowSchema: Joi.object().keys({
    workflow_rules_trn_pk: Joi.number(),
    workflow_id: Joi.string().allow(""),
    document_mst_fk: Joi.number(),
    document_id: Joi.string().allow(""),
    document_name: Joi.string().allow(""),
    is_active: Joi.number(),
    to_loc_mst_fk: Joi.number(),
    location_id: Joi.string().allow(""),
    location_name: Joi.string().allow(""),
    department_mst_fk: Joi.number(),
    department_id: Joi.string().allow(""),
    department_name: Joi.string().allow(""),
    designation_mst_fk: Joi.number(),
    designation_id: Joi.string().allow(""),
    designation_name: Joi.string().allow(""),
    user_mst_fk: Joi.number(),
    username: Joi.string().allow(""),
    copy1_mst_fk: Joi.number(),
    copy1_id: Joi.string().allow(""),
    copy2_mst_fk: Joi.number(),
    copy2_id: Joi.string().allow(""),
    copy3_mst_fk: Joi.number(),
    copy3_id: Joi.string().allow(""),
    valid_from: Joi.string().allow(""),
    valid_to: Joi.string().allow(""),
    actiondays: Joi.string().allow(""),
    reminderdays: Joi.string().allow(""),
    reminderfreq: Joi.string().allow(""),
    escalate_user_fk: Joi.number(),
    escalteid: Joi.string().allow(""),
    targetdays: Joi.string().allow(""),
    created_by_fk: Joi.number(),
    created_on: Joi.string().allow(""),
    last_updated_by_fk: Joi.number(),
    last_updated_on: Joi.string().allow(""),
    version_no: Joi.number(),
    reminder_alert: Joi.number(),
    reminder_email: Joi.number(),
    notification_alert: Joi.number(),
    notification_email: Joi.number(),
    locationDtls: Joi.array().items({
      workflow_loc_trn_pk: Joi.number(),
      from_loc_mst_fk: Joi.number(),
      location_id: Joi.string().allow(""),
      location_name: Joi.string().allow(""),
      is_active: Joi.number(),
    }),
  }),

  isApproverSchema: Joi.object().keys({
    DocId: Joi.string().allow("").required(),
    LocFK: Joi.number().required(),
    UserFK: Joi.number(),
    DocDate: Joi.string().allow("").required(),
  }),

  getWorkFlowMailSchema: Joi.object().keys({
    DocId: Joi.string().allow("").required(),
    LocFK: Joi.number().required(),
    UserFK: Joi.number(),
    DocDate: Joi.string().allow("").required(),
  }),

  fetchWFLocationSchema: Joi.object().keys({}),

  fetchWFUserSchema: Joi.object().keys({
    LocationFK: Joi.number(),
    UserFK1: Joi.number(),
    UserFK2: Joi.number(),
    UserFK3: Joi.number(),
  }),

  fetchWFAppUserSchema: Joi.object().keys({
    LocationFK: Joi.number(),
    DeptFK: Joi.number(),
    DesigFK: Joi.number(),
    UserFK1: Joi.number(),
    UserFK2: Joi.number(),
    UserFK3: Joi.number(),
  }),

  fetchDepartmentSchema: Joi.object().keys({
    LocationFK: Joi.number(),
    DeptFK: Joi.number(),
    UserFK: Joi.number(),
  }),

  fetchDesignationSchema: Joi.object().keys({
    LocationFK: Joi.number(),
    DeptFK: Joi.number(),
    UserFK: Joi.number(),
  }),

  fetchDocDropdownSchema: Joi.object().keys({}),

  delWorkFlowSchema: Joi.object().keys({
    workFlowPK: Joi.number(),
    status: Joi.number(),
  }),

  deactivateWorkFlowSchema: Joi.object().keys({
    workFlowPK: Joi.number(),
    status: Joi.number(),
  }),

  getLocationPKSchema: Joi.object().keys({
    PortPK: Joi.number().required(),
  }),
};
module.exports = schemas;
