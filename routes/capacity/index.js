const express = require('express');
const capacityController = require('../../controllers/capacity');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDPortSchema,fetchDDServiceSchema,fetchDDVoyageSchema,fetchCapacityListchema } = require('../../schema/capacity/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), capacityController.fetchDDCarrier);
router.get('/FetchDDPort', joiValidator(fetchDDPortSchema,'query'), capacityController.fetchDDPort);
router.get('/FetchDDService', joiValidator(fetchDDServiceSchema,'query'), capacityController.fetchDDService);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), capacityController.fetchDDVoyage);
router.get('/FetchCapacityList', joiValidator(fetchCapacityListchema,'query'), capacityController.fetchCapacityList);


module.exports = router;