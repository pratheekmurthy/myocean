const express = require('express');
const dailyBookingReportController = require('../../controllers/dailyBookingReport');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDVoyageSchema,fetchDDPolSchema,fetchDDPolTerminalSchema,fetchDDCustomerSchema,fetchDDComGrpSchema } = require('../../schema/dailyBookingReport/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), dailyBookingReportController.fetchDDCarrier);
router.get('/FetchDDPol', joiValidator(fetchDDPolSchema,'query'),dailyBookingReportController.fetchDDPol);
router.get('/FetchDDPolTerminal', joiValidator(fetchDDPolTerminalSchema,'query'), dailyBookingReportController.fetchDDPolTerminal);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), dailyBookingReportController.fetchDDVoyage);
router.get('/FetchDDCustomer', joiValidator(fetchDDCustomerSchema,'query'), dailyBookingReportController.fetchDDCustomer);
router.get('/FetchDDComGrp', joiValidator(fetchDDComGrpSchema,'query'), dailyBookingReportController.fetchDDComGrp);




module.exports = router;