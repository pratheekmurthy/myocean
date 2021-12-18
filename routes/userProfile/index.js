const express = require('express');
const userProfileController = require('../../controllers/userProfile');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchusers } = require('../../schema/userProfile/index')
const { fetchuserdetails } = require('../../schema/userProfile/index')
const { fetchuserrights } = require('../../schema/userProfile/index')
const { fetchuseraccess } = require('../../schema/userProfile/index')
const { deleteuser } = require('../../schema/userProfile/index')
const { getuserdropdown } = require('../../schema/userProfile/index')
const { fetchuserpreference } = require('../../schema/userProfile/index')
const { printusers } = require('../../schema/userProfile/index')

router.get('/fetchusers', joiValidator(fetchusers, 'query'), userProfileController.fetchusers);
// router.get('/fetchuserdetails', joiValidator(fetchuserdetails, 'query'), userProfileController.fetchuserdetails);
// router.get('/fetchuserrights', joiValidator(fetchuserrights, 'query'), userProfileController.fetchuserrights);
// router.post('/saveuser', userProfileController.saveuser);
// router.get('/fetchuseraccess', joiValidator(fetchuseraccess, 'query'), userProfileController.fetchuseraccess);
// router.post('/saveuseraccess', userProfileController.saveuseraccess);
// router.put('/deactivateuser', userProfileController.deactivateuser);
// router.delete('/deleteuser', joiValidator(deleteuser, 'body'), userProfileController.deleteuser);
// router.post('/saveuserpreference', userProfileController.saveuserpreference);
// router.get('/getuserdropdown', joiValidator(getuserdropdown, 'query'), userProfileController.getuserdropdown);
// router.get('/fetchuserpreference', joiValidator(fetchuserpreference, 'query'), userProfileController.fetchuserpreference);
// router.post('/changepwd', userProfileController.changepwd);
// router.post('/sendotpbyemail', userProfileController.sendotpbyemail);
// router.post('/validatepassword', userProfileController.validatepassword);
// router.get('/printusers', joiValidator(printusers, 'query'), userProfileController.printusers);

module.exports = router;