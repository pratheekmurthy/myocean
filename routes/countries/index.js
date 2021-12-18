const express = require('express');
const countriesController = require('../../controllers/countries');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchcountrylist } = require('../../schema/countries/index')
const { fetchcurrency } = require('../../schema/countries/index')
const { savecountry } = require('../../schema/countries/index')
const { deactivatecntry } = require('../../schema/countries/index')
const { delcountrymaster } = require('../../schema/countries/index')
const { fetchcountryapi } = require('../../schema/countries/index')

router.get('/fetchcountrylist', countriesController.fetchcountrylist);
router.get('/fetchcurrency', countriesController.fetchcurrency);
router.post('/savecountry', countriesController.savecountry);
router.post('/deactivatecntry', countriesController.deactivatecntry);
router.post('/delcountrymaster', countriesController.delcountrymaster);
router.get('/fetchcountryapi', countriesController.fetchcountryapi);

module.exports = router;