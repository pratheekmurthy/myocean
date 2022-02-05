const express = require('express');
const canController = require('../../controllers/can');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDPortSchema,fetchDDTerminalSchema,fetchDDVoyageSchema,fetchCANListSchema,fetchDDRBLSchema } = require('../../schema/can/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), canController.fetchDDCarrier);
router.get('/FetchDDPort', joiValidator(fetchDDPortSchema,'query'), canController.fetchDDPort);
router.get('/FetchDDTerminal', joiValidator(fetchDDTerminalSchema,'query'), canController.fetchDDTerminal);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'), canController.fetchDDVoyage);
router.get('/FetchDDRBL', joiValidator(fetchDDRBLSchema,'query'), canController.fetchDDRBL);
router.get('/FetchCANList', joiValidator(fetchCANListSchema,'query'), canController.fetchCANList);




module.exports = router;

