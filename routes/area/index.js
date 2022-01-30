const express = require('express');
const ageingController = require('../../controllers/area');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchAreaSchema } = require('../../schema/area/index')

router.get('/FetchArea', joiValidator(fetchAreaSchema,'query'), ageingController.fetchArea);



module.exports = router;