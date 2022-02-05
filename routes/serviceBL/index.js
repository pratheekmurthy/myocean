const express = require('express');
const serviceBLController = require('../../controllers/serviceBL');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const {
  fetchDDCarrierSchema,fetchDDVoyageSchema,fetchDDPolSchema,
  fetchDDPolTerminalSchema,fetchDDCustomerSchema,fetchDDBookingNoSchema,
  fetchDDServiceBLSchema,} = require('../../schema/serviceBL/index');

router.get('/FetchDDCarrier',joiValidator(fetchDDCarrierSchema, 'query'),serviceBLController.fetchDDCarrier);
router.get('/FetchDDVoyage',joiValidator(fetchDDVoyageSchema, 'query'),serviceBLController.fetchDDVoyage);
router.get('/FetchDDPol',joiValidator(fetchDDPolSchema, 'query'),serviceBLController.fetchDDPol);
router.get('/FetchDDPolTerminal',joiValidator(fetchDDPolTerminalSchema, 'query'),serviceBLController.fetchDDPolTerminal);
router.get('/FetchDDCustomer',joiValidator(fetchDDCustomerSchema, 'query'),serviceBLController.fetchDDCustomer);
router.get('/FetchDDBookingNo',joiValidator(fetchDDBookingNoSchema, 'query'),serviceBLController.fetchDDBookingNo);
router.get('/FetchDDServiceBL',joiValidator(fetchDDServiceBLSchema, 'query'),serviceBLController.fetchDDServiceBL);

module.exports = router;
