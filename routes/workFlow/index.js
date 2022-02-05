const express = require('express');
const workFlowController = require('../../controllers/workFlow');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDocListingSchema,fetchDocEntrySchema,fetchDocParameterSchema,
    getDocGrpDropdownSchema,documentSaveSchema, fetchWFListingSchema, 
    fetchWorkFlowEntrySchema,fetchWorkFlowLogSchema,saveWorkFlowSchema, 
    isApproverSchema,getWorkFlowMailSchema, fetchWFLocationSchema, 
    fetchWFUserSchema,fetchWFAppUserSchema,fetchDepartmentSchema, 
    fetchDesignationSchema,fetchDocDropdownSchema,delWorkFlowSchema, 
    deactivateWorkFlowSchema,getLocationPKSchema } = require('../../schema/workFlow/index')

router.get('/FetchDocListing', joiValidator(fetchDocListingSchema, 'query'), workFlowController.fetchDocListing);
router.get('/FetchDocEntry', joiValidator(fetchDocEntrySchema, 'query'), workFlowController.fetchDocEntry);
router.get('/FetchDocParameter', joiValidator(fetchDocParameterSchema, 'query'), workFlowController.fetchDocParameter);
router.get('/GetDocGrpDropdown', joiValidator(getDocGrpDropdownSchema, 'query'), workFlowController.getDocGrpDropdown);
router.post('/DocumentSave', joiValidator(documentSaveSchema, 'body'), workFlowController.documentSave);
router.get('/FetchWFListing', joiValidator(fetchWFListingSchema, 'query'), workFlowController.fetchWFListing);
router.get('/FetchWorkFlowEntry', joiValidator(fetchWorkFlowEntrySchema, 'query'), workFlowController.fetchWorkFlowEntry);
router.get('/FetchWorkFlowLog', joiValidator(fetchWorkFlowLogSchema, 'query'), workFlowController.fetchWorkFlowLog);
router.post('/SaveWorkFlow', joiValidator(saveWorkFlowSchema, 'body'), workFlowController.saveWorkFlow);
router.get('/IsApprover', joiValidator(isApproverSchema, 'query'), workFlowController.isApprover);
router.get('/GetWorkFlowMail', joiValidator(getWorkFlowMailSchema, 'query'), workFlowController.getWorkFlowMail);
router.get('/FetchWFLocation', joiValidator(fetchWFLocationSchema, 'query'), workFlowController.fetchWFLocation);
router.get('/FetchWFUser', joiValidator(fetchWFUserSchema, 'query'), workFlowController.fetchWFUser);
router.get('/FetchWFAppUser', joiValidator(fetchWFAppUserSchema, 'query'), workFlowController.fetchWFAppUser);
router.get('/FetchDepartment', joiValidator(fetchDepartmentSchema, 'query'), workFlowController.fetchDepartment);
router.get('/FetchDesignation', joiValidator(fetchDesignationSchema, 'query'), workFlowController.fetchDesignation);
router.get('/FetchDocDropdown', joiValidator(fetchDocDropdownSchema, 'query'), workFlowController.fetchDocDropdown);
router.post('/DelWorkFlow', joiValidator(delWorkFlowSchema, 'body'), workFlowController.delWorkFlow);
router.post('/DeactivateWorkFlow', joiValidator(deactivateWorkFlowSchema, 'body'), workFlowController.deactivateWorkFlow);
router.get('/GetLocationPK', joiValidator(getLocationPKSchema, 'query'), workFlowController.getLocationPK);


module.exports = router;