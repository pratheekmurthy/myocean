const express = require('express');
const activeSurRptController = require('../../controllers/activeSurchargeRpt');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { activeSurRptSchema,FetchDDCustomerSchema,FetchDDSurchargeSchema,FetchDDPodSchema,FetchDDPolSchema,FetchDDLocalchargeSchema,
    FetchDDRebatechargeSchema,FetchDDCommoditySchema } = require('../../schema/agentSurRpt/index')

router.get('/FetchDDCarrier', joiValidator(activeSurRptSchema,'query'), activeSurRptController.fetchDDCarrier);
router.get('/FetchDDCustomer', joiValidator(FetchDDCustomerSchema,'query'),activeSurRptController.fetchDDCustomer);
router.get('/FetchDDPod',joiValidator(FetchDDPodSchema,'query'), activeSurRptController.FetchDDPod);
router.get('/FetchDDPol',joiValidator(FetchDDPolSchema,'query'),  activeSurRptController.FetchDDPol);
router.get('/FetchDDSurcharge',joiValidator(FetchDDSurchargeSchema,'query'),  activeSurRptController.FetchDDSurcharge);
router.get('/FetchDDLocalcharge',joiValidator(FetchDDLocalchargeSchema,'query'),  activeSurRptController.FetchDDLocalcharge);
router.get('/FetchDDRebatecharge',joiValidator(FetchDDRebatechargeSchema,'query'),  activeSurRptController.FetchDDRebatecharge);
router.get('/FetchDDCommodity',joiValidator(FetchDDCommoditySchema,'query'),  activeSurRptController.FetchDDCommodity);

module.exports = router;

