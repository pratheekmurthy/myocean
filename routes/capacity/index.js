const express = require('express');
const ageingController = require('../../controllers/capacity');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDPortSchema,fetchDDServiceSchema,fetchDDVoyageSchema,fetchCapacityListchema } = require('../../schema/capacity/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), ageingController.fetchDDCarrier);
router.get('/FetchDDPort', joiValidator(fetchDDPortSchema,'query'), ageingController.fetchDDPort);
router.get('/FetchDDService', joiValidator(fetchDDServiceSchema,'query'), ageingController.fetchDDService);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), ageingController.fetchDDVoyage);
router.get('/FetchCapacityList', joiValidator(fetchCapacityListchema,'query'), ageingController.fetchCapacityList);


module.exports = router;