const express = require('express');
const fetchController = require('../../controllers/fetch');
const {fetchPOLSchema, fetchPODSchema, fetchTerSchema} = require('../../schema/viewSchedule/index')

const router = express.Router();
const joiValidator = require('../../middleware/joi')


router.get('/FetchPOLList', joiValidator(fetchPOLSchema, 'query'), fetchController.fetchPOLList);
router.get('/FetchPODList', joiValidator(fetchPODSchema, 'query'), fetchController.fetchPODList);
router.get('/FetchTerList', joiValidator(fetchTerSchema, 'query'), fetchController.fetchTerList);


module.exports = router;