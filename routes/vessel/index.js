const express = require('express');
const vesselController = require('../../controllers/vessel');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { vesselSchema, fetchOverviewSchema } = require('../../schema/vessel/index')

router.get('/getvessel', joiValidator(vesselSchema, 'query'), vesselController.getVessel);
router.get('/fetchOverview', joiValidator(fetchOverviewSchema, 'query'), vesselController.fetchOverview);

module.exports = router;