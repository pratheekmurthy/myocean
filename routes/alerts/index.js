const express = require('express');
const alertController = require('../../controllers/alert');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { alertSchema } = require('../../schema/index')

const {getMessageSchema,createMessageSchema,getMessagesForUserSchema,getMessageThreadSchema,deleteMessageSchema,clearMessageSchema,
    updateActionSchema,getUnReadCountSchema,getParametersSchema,getMessageTemplateSchema,saveTemplateSchema,
    markReadSchema} = require('../../schema/alert/index')

// router.get('/GetUnReadCount', joiValidator(alertSchema, 'query'), alertController.alertCount);


router.get('/GetMessage', joiValidator(getMessageSchema, 'query'), alertController.getMessage);
router.post('/CreateMessage', joiValidator(createMessageSchema, 'body'), alertController.createMessage);
router.get('/GetMessagesForUser', joiValidator(getMessagesForUserSchema, 'query'), alertController.getMessagesForUser);
router.get('/GetMessageThread', joiValidator(getMessageThreadSchema, 'query'), alertController.getMessageThread);
router.post('/DeleteMessage', joiValidator(deleteMessageSchema, 'body'), alertController.deleteMessage);
router.post('/ClearMessage', joiValidator(clearMessageSchema, 'body'), alertController.clearMessage);
router.post('/UpdateAction', joiValidator(updateActionSchema, 'body'), alertController.updateAction);
router.get('/GetUnReadCount', joiValidator(getUnReadCountSchema, 'query'), alertController.getUnReadCount);
router.get('/GetAlertType',alertController.getAlertType);
router.get('/GetParameters', joiValidator(getParametersSchema, 'query'), alertController.getParameters);
router.get('/GetMessageTemplate', joiValidator(getMessageTemplateSchema, 'query'), alertController.getMessageTemplate);
router.post('/SaveTemplate', joiValidator(saveTemplateSchema, 'body'), alertController.saveTemplate);
router.get('/MarkRead', joiValidator(markReadSchema, 'query'), alertController.markRead);

module.exports = router;


