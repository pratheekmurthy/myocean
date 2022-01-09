const express = require('express');
const formPrefController = require('../../controllers/common');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { formPref } = require('../../schema/common/index')

router.get('/FetchGridPref', joiValidator(formPref, 'query'), formPrefController.fetchGridPref);

module.exports = router;