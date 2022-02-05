const express = require('express');
const riverBLController = require('../../controllers/riverBL');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const {
  fetchDDCarrierSchema,fetchDDPolSchema,fetchDDPolTerminalSchema,
  fetchDDVoyageSchema,fetchDDCustomerSchema,fetchDDBookingNoSchema,
  fetchDDRiverBLSchema,} = require('../../schema/riverBL/index');

router.get('/FetchDDCarrier',joiValidator(fetchDDCarrierSchema, 'query'),riverBLController.fetchDDCarrier);
router.get('/FetchDDPol',joiValidator(fetchDDPolSchema, 'query'),riverBLController.fetchDDPol);
router.get('/FetchDDPolTerminal',joiValidator(fetchDDPolTerminalSchema, 'query'),riverBLController.fetchDDPolTerminal);
router.get('/FetchDDVoyage',joiValidator(fetchDDVoyageSchema, 'query'),riverBLController.FetchDDVoyage);
router.get('/FetchDDCustomer',joiValidator(fetchDDCustomerSchema, 'query'),riverBLController.fetchDDCustomer);
router.get('/FetchDDBookingNo',joiValidator(fetchDDBookingNoSchema, 'query'),riverBLController.fetchDDBookingNo);
router.get('/FetchDDRiverBL',joiValidator(fetchDDRiverBLSchema, 'query'),riverBLController.fetchDDRiverBL);

module.exports = router;
