const express = require('express');
const ageingController = require('../../controllers/ageing');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {FetchDDCarrierSchema,FetchDDLocationSchema,FetchDDCustomerSchema,FetchDDVoyageSchema } = require('../../schema/ageing/index')

router.get('/FetchDDCarrier', joiValidator(FetchDDCarrierSchema,'query'), ageingController.FetchDDCarrier);
router.get('/FetchDDLocation', joiValidator(FetchDDLocationSchema,'query'),ageingController.FetchDDLocation);
router.get('/FetchDDVoyage',joiValidator(FetchDDVoyageSchema,'query'),ageingController.FetchDDVoyage);
router.get('/FetchDDCustomer',joiValidator(FetchDDCustomerSchema,'query'),ageingController.FetchDDCustomer);


module.exports = router;


