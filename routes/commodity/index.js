const express = require('express');
const commodityController = require('../../controllers/commodity');

const router = express.Router();
const joiValidator = require('../../middleware/joi')


router.get('/fetchQPORTCommGrp', commodityController.fetchQPORTCommGrp);


module.exports = router;