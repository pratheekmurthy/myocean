const express = require('express');
const ageingController = require('../../controllers/can');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDPortSchema,fetchDDTerminalSchema,fetchDDVoyageSchema,fetchCANListSchema,fetchDDRBLSchema } = require('../../schema/can/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), ageingController.fetchDDCarrier);
router.get('/FetchDDPort', joiValidator(fetchDDPortSchema,'query'), ageingController.fetchDDPort);
router.get('/FetchDDTerminal', joiValidator(fetchDDTerminalSchema,'query'), ageingController.fetchDDTerminal);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), ageingController.fetchDDVoyage);
router.get('/FetchDDRBL', joiValidator(fetchDDRBLSchema,'query'), ageingController.fetchDDRBL);
router.get('/FetchCANList', joiValidator(fetchCANListSchema,'query'), ageingController.fetchCANList);




module.exports = router;

