const express = require('express');
const commodityRateController = require('../../controllers/commodityRate');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDTypeSchema,fetchDDCommoditySchema,fetchDDChargesSchema,fetchDDPolSchema,fetchDDPodSchema } = require('../../schema/commodityRate/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), commodityRateController.fetchDDCarrier);
router.get('/FetchDDType', commodityRateController.fetchDDType);
router.get('/FetchDDCommodity', joiValidator(fetchDDCommoditySchema,'query'), commodityRateController.fetchDDCommodity);
router.get('/FetchDDCharges', joiValidator(fetchDDChargesSchema,'query'), commodityRateController.fetchDDCharges);
router.get('/FetchDDPol', joiValidator(fetchDDPolSchema,'query'), commodityRateController.fetchDDPol);
router.get('/FetchDDPod', joiValidator(fetchDDPodSchema,'query'), commodityRateController.fetchDDPod);




module.exports = router;