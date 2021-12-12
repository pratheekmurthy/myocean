const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { loginSchema } = require('../../schema/index')

router.post('/login', joiValidator(loginSchema, 'body'), authController.login);

module.exports = router;