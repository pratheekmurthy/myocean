const express = require('express');
const menuController = require('../../controllers/menu');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { menuSchema } = require('../../schema/index')

router.post('/menu', joiValidator(menuSchema, 'query'), menuController.menuList);

module.exports = router;