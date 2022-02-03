const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {trnLoginSchema,resetpasswordSchema1,deviceaddressSchema,updateLogOutSchema,deviceaddressUserdetailsSchema,otpfailsSchema} = require('../../schema/auth')
const { loginSchema, resetpasswordSchema } = require('../../schema/index')

router.post('/login', joiValidator(loginSchema, 'body'), authController.login);

router.post('/login/forgotpassword', joiValidator(resetpasswordSchema, 'body'), authController.forgotPassword);


// router.post('/login', joiValidator(loginSchema, 'body'), authController.login);
// router.post('/login/forgotpassword', joiValidator(forgotpasswordSchema, 'body'), authController.forgotPassword);

router.post('/TrnLogin', joiValidator(trnLoginSchema, 'body'), authController.trnLogin);
router.post('/Resetpassword', joiValidator(resetpasswordSchema1, 'body'), authController.resetpassword);
router.post('/login/UpdateLogOut', joiValidator(updateLogOutSchema, 'body'), authController.updateLogOut);
router.post('/login/deviceaddress/userdetails', joiValidator(deviceaddressUserdetailsSchema, 'body'), authController.deviceaddressUserdetails);
router.patch('/login/otpfails', joiValidator(otpfailsSchema, 'body'), authController.otpfails);
router.get('/login/deviceaddress', joiValidator(deviceaddressSchema, 'query'), authController.deviceaddress);


module.exports = router;











