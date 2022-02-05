const express = require('express');
const OTSController = require('../../controllers/OTS');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const {
  fetchDDCarrierSchema,fetchDDLocationSchema,fetchDDVoyageSchema,
  fetchDDCustomerSchema,fetchDDInvoiceSchema,fetchOTS_InvoiceListSchema,
} = require('../../schema/OTS/index');

router.get('/FetchDDCarrier',joiValidator(fetchDDCarrierSchema, 'query'),OTSController.fetchDDCarrier);
router.get('/FetchDDLocation', joiValidator(fetchDDLocationSchema, 'query'),OTSController.fetchDDLocation);
router.get('/FetchDDVoyage',joiValidator(fetchDDVoyageSchema, 'query'),OTSController.fetchDDVoyage);
router.get('/FetchDDCustomer',joiValidator(fetchDDCustomerSchema, 'query'),OTSController.fetchDDCustomer);
router.get('/FetchDDInvoice',joiValidator(fetchDDInvoiceSchema, 'query'),OTSController.fetchDDInvoice);
router.get('/FetchOTS_InvoiceList',joiValidator(fetchOTS_InvoiceListSchema, 'query'),OTSController.fetchOTS_InvoiceList);

module.exports = router;
