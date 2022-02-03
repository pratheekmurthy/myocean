const express = require('express');
const deliveryOrderController = require('../../controllers/deliveryOrder');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDVoyageSchema,fetchDDPODSchema,fetchDDRiverBLSchema,fetchDDDOSchema } = require('../../schema/deliveryOrder/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), deliveryOrderController.fetchDDCarrier);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'),deliveryOrderController.fetchDDVoyage);
router.get('/FetchDDPOD', joiValidator(fetchDDPODSchema,'query'), deliveryOrderController.fetchDDPOD);
router.get('/FetchDDRiverBL', joiValidator(fetchDDRiverBLSchema,'query'), deliveryOrderController.fetchDDRiverBL);
router.get('/FetchDDDO', joiValidator(fetchDDDOSchema,'query'), deliveryOrderController.fetchDDDO);

module.exports = router;

