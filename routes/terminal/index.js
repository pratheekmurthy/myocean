const express = require('express');
const terminalController = require('../../controllers/terminal');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { terminalSchema } = require('../../schema/terminal/index')

router.get('/GetQPORTCntry', joiValidator(terminalSchema, 'query'), terminalController.getQPORTCntry);

module.exports = router;