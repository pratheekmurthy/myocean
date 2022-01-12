const express = require('express');
const vesselController = require('../../controllers/vessel');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { vesselSchema } = require('../../schema/vessel/index')

router.get('/getvessel', joiValidator(vesselSchema, 'query'), vesselController.getVessel);

module.exports = router;