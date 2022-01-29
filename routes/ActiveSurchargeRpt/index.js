const express = require('express');
const activeSurRptController = require('../../controllers/activeSurchargeRpt');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { activeSurRptSchema } = require('../../schema/agentSurRpt/index')

router.get('/FetchDDCarrier', joiValidator(activeSurRptSchema), activeSurRptController.fetchDDCarrier);
router.get('/FetchDDCustomer', activeSurRptController.fetchDDCustomer);

module.exports = router;