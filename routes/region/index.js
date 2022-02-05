const express = require('express');
const regionController = require('../../controllers/region');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const { fetchRegionSchema } = require('../../schema/region/index');

router.get('/FetchRegion',joiValidator(fetchRegionSchema, 'query'),regionController.fetchRegion);

module.exports = router;
