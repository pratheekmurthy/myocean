const express = require('express');
const alertController = require('../../controllers/alert');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { alertSchema } = require('../../schema/index')

router.post('/getunreadcount', joiValidator(alertSchema, 'query'), alertController.alertCount);

module.exports = router;