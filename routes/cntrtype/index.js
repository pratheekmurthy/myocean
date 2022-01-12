const express = require('express');
const cntrtypeController = require('../../controllers/cntrtype');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { cntrTypeSchema } = require('../../schema/cntrtype/index')

router.get('/getvessel', joiValidator(cntrTypeSchema, 'query'), cntrtypeController.fetchQPortCntrList);


module.exports = router;