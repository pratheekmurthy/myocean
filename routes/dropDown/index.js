const express = require('express');
const dropDownController = require('../../controllers/dropDown');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchDropdownSchema } = require('../../schema/dropdown/index')

router.get('/fetchdropdown', joiValidator(fetchDropdownSchema, 'query'), dropDownController.fetchDropdown);

module.exports = router;