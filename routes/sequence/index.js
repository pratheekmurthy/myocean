const express = require('express');
const sequenceController = require('../../controllers/sequence');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const {
  fetchSequenceListSchema,saveSequenceSchema,deactivateSequenceSchema,
  delSequenceSchema,} = require('../../schema/sequence/index');

router.get('/FetchSequenceList',joiValidator(fetchSequenceListSchema, 'query'),sequenceController.fetchSequenceList);
router.post('/SaveSequence',joiValidator(saveSequenceSchema, 'body'),sequenceController.saveSequence);
router.put('/DeactivateSequence',joiValidator(deactivateSequenceSchema, 'body'),sequenceController.deactivateSequence);
router.delete('/DelSequence',joiValidator(delSequenceSchema, 'query'),sequenceController.delSequence);

module.exports = router;
