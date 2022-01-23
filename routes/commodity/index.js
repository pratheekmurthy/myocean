const express = require('express');
const commodityController = require('../../controllers/commodity');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchCommListSchema } = require('../../schema/comodity/index')


router.get('/fetchQPORTCommGrp', commodityController.fetchQPORTCommGrp);
router.get('/fetchQPORTCommList', joiValidator(fetchCommListSchema, 'query'), commodityController.fetchQPORTCommodityList);

module.exports = router;