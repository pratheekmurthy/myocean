const express = require('express');
const userProfileController = require('../../controllers/userProfile');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchusers } = require('../../schema/signup/index')
const { fetchuserdetails } = require('../../schema/signup/index')
const { fetchuserrights } = require('../../schema/signup/index')
const { saveuser } = require('../../schema/signup/index')
const { fetchuseraccess } = require('../../schema/signup/index')
const { saveuseraccess } = require('../../schema/signup/index')
const { deactivateuser } = require('../../schema/signup/index')
const { deleteuser } = require('../../schema/signup/index')
const { saveuserpreference } = require('../../schema/signup/index')
const { getuserdropdown } = require('../../schema/signup/index')
const { fetchuserpreference } = require('../../schema/signup/index')
const { changepwd } = require('../../schema/signup/index')
const { sendotpbyemail } = require('../../schema/signup/index')
const { validatepassword } = require('../../schema/signup/index')
const { printusers } = require('../../schema/signup/index')

router.get('/fetchusers', userProfileController.fetchusers);
router.post('/fetchuserdetails', userProfileController.fetchuserdetails);
router.get('/fetchuserrights', userProfileController.fetchuserrights);
router.get('/saveuser', userProfileController.saveuser);
router.get('/fetchuseraccess', userProfileController.fetchuseraccess);
router.get('/saveuseraccess', userProfileController.saveuseraccess);
router.get('/deactivateuser', userProfileController.deactivateuser);
router.get('/deleteuser', userProfileController.deleteuser);
router.get('/saveuserpreference', userProfileController.saveuserpreference);
router.get('/getuserdropdown', userProfileController.getuserdropdown);
router.get('/fetchuserpreference', userProfileController.fetchuserpreference);
router.post('/changepwd', userProfileController.changepwd);
router.post('/sendotpbyemail', userProfileController.sendotpbyemail);
router.post('/validatepassword', userProfileController.validatepassword);
router.post('/printusers', userProfileController.printusers);

module.exports = router;