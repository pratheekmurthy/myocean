const express = require('express');
const { body } = require('express-validator');

// const authController = require('../../controllers/user');
const authController = require('../../controllers/auth');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { loginSchema } = require('../../schema/index')

// router.post(
//   '/login',
//   joiValidator(loginSchema, 'body'),
//   authController.signup
// );

// router.post('/login', joiValidator(loginSchema, 'body'), authController.login);
router.post('/login', authController.login);

module.exports = router;