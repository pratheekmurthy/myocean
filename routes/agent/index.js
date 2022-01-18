const express = require('express');
const agentController = require('../../controllers/agent');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { agentSchema } = require('../../schema/agent/index')

router.get('/GetQPORTCntry', agentController.getQPORTCntry);
router.get('/GetCompanyDropdown', agentController.getCompanyDropdown);
router.get('/FetchQPORTAgentList', agentController.FetchQPORTAgentList);

module.exports = router;