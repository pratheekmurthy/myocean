const express = require('express');
const { body } = require('express-validator');

const authController = require('../../controllers/user');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { authSchema} = require('../../schema/index')

router.post(
  '/signup',
  joiValidator(authSchema, 'body'),
  authController.signup
);

router.post('/login', authController.login);

module.exports = router;