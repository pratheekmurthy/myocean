const express = require('express');
const menuController = require('../../controllers/alert');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { menuSchema } = require('../../schema/index')

router.post('/getunreadcount', joiValidator(menuSchema, 'query'), menuController.menuList);

module.exports = router;