const express = require('express');
const emailController = require('../../controllers/emailManagment');
const {emailUnReadSchema} = require('../../schema/emailManagment/index')

const router = express.Router();
const joiValidator = require('../../middleware/joi')


router.get('/GetUnReadCnt', joiValidator(emailUnReadSchema, 'query'), emailController.getUnReadCnt);


module.exports = router;