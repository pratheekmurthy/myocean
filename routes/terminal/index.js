const express = require('express');
const terminalController = require('../../controllers/terminal');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { terminalSchema } = require('../../schema/terminal/index')

router.get('/GetQPORTCntry', terminalController.getQPORTCntry);
router.get('/FetchQPORTLocList', terminalController.fetchQPORTLocList);
router.get('/FetchQPORTTerList', joiValidator(terminalSchema), terminalController.fetchQPORTTerList);

module.exports = router;