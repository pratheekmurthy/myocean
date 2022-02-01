const express = require('express');
const bookingStatusController = require('../../controllers/bookingStatus');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDServiceSchema,fetchDDVoyageSchema,fetchDDPortSchema,fetchDDBookingSchema } = require('../../schema/bookingStatus/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), bookingStatusController.fetchDDCarrier);
router.get('/FetchDDService', joiValidator(fetchDDServiceSchema,'query'), bookingStatusController.fetchDDService);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), bookingStatusController.fetchDDVoyage);
router.get('/FetchDDPort', joiValidator(fetchDDPortSchema,'query'), bookingStatusController.fetchDDPort);
router.get('/FetchDDBooking', joiValidator(fetchDDBookingSchema,'query'), bookingStatusController.fetchDDBooking);




module.exports = router;