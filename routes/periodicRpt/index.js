const express = require('express');
const periodicRptController = require('../../controllers/periodicRpt');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const {
  fetchDDCarrierSchema,fetchDDServiceSchema,fetchDDPortSchema,
  fetchDDCustomerSchema,fetchDDCommoditySchema,fetchPeriodicRptListSchema,
} = require('../../schema/periodicRpt/index');

router.get('/FetchDDCarrier',joiValidator(fetchDDCarrierSchema, 'query'),periodicRptController.fetchDDCarrier);
router.get('/FetchDDService',joiValidator(fetchDDServiceSchema, 'query'),periodicRptController.fetchDDService);
router.get('/FetchDDPort',joiValidator(fetchDDPortSchema, 'query'),periodicRptController.fetchDDPort);
router.get('/FetchDDCustomer',joiValidator(fetchDDCustomerSchema, 'query'),periodicRptController.fetchDDCustomer);
router.get('/FetchDDCommodity',joiValidator(fetchDDCommoditySchema, 'query'),periodicRptController.fetchDDCommodity);
router.get('/FetchPeriodicRptList',joiValidator(fetchPeriodicRptListSchema, 'query'),periodicRptController.fetchPeriodicRptList);

module.exports = router;
