const express = require('express');
const areaController = require('../../controllers/area');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchAreaSchema } = require('../../schema/area/index')

router.get('/FetchArea', joiValidator(fetchAreaSchema,'query'), areaController.fetchArea);



module.exports = router;