const express = require('express');
const roeController = require('../../controllers/roe');

const router = express.Router();
const joiValidator = require('../../middleware/joi')


router.get('/fetchROECurrency', roeController.fetchROECurrency);
module.exports = router;