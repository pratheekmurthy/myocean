const express = require('express');
const ageingController = require('../../controllers/bookingStatus');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDServiceSchema,fetchDDVoyageSchema,fetchDDPortSchema,fetchDDBookingSchema } = require('../../schema/bookingStatus/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), ageingController.fetchDDCarrier);
router.get('/FetchDDService', joiValidator(fetchDDServiceSchema,'query'), ageingController.fetchDDService);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), ageingController.fetchDDVoyage);
router.get('/FetchDDPort', joiValidator(fetchDDPortSchema,'query'), ageingController.fetchDDPort);
router.get('/FetchDDBooking', joiValidator(fetchDDBookingSchema,'query'), ageingController.fetchDDBooking);




module.exports = router;