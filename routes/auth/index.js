const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { loginSchema, resetpasswordSchema } = require('../../schema/index')

router.post('/login', joiValidator(loginSchema, 'body'), authController.login);

router.post('/login/forgotpassword', joiValidator(resetpasswordSchema, 'body'), authController.forgotPassword);

module.exports = router;