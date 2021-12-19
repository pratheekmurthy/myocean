const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { loginSchema } = require('../../schema/index')

router.post('/login', joiValidator(loginSchema, 'body'), authController.login);

// router.post('/login/forgotpassword', joiValidator(resetpasswordSchema, 'params'), authController.forgotPassword )

module.exports = router;