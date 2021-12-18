const express = require('express');
const currencyController = require('../../controllers/currency');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchcurrency } = require('../../schema/currency/index')

router.get('/fetchcurrency', currencyController.fetchcurrency);

module.exports = router;