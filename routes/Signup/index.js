const express = require('express');
const signUpController = require('../../controllers/signup');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchSignUpSchema } = require('../../schema/signup/index')
const { fetchLocationsSchema } = require('../../schema/signup/index')
const { fetchCustomerSchema } = require('../../schema/signup/index')
const { fetchValidateEmail } = require('../../schema/signup/index')
const { fetchValidateMobile } = require('../../schema/signup/index')

console.info("entered routes")
router.get('/fetchnotifications', signUpController.fetchNotifications);
router.get('/fetchalerts', signUpController.fetchAlerts); 
router.get('/fetchsignup', joiValidator(fetchSignUpSchema, 'query'), signUpController.fetchSignUp);
router.post('/saveuserdetails', signUpController.saveUserDetails);
router.get('/fetchcountries', signUpController.fetchCountries);
router.get('/fetchlocations', joiValidator(fetchLocationsSchema, 'query'), signUpController.fetchLocations);
router.get('/fetchmlocompanies', signUpController.fetchMloCompanies);
router.get('/fetchCustomer', joiValidator(fetchCustomerSchema, 'query'), signUpController.fetchCustomer);
router.get('/fetchdesignation', signUpController.fetchDesignation);
router.get('/validateemail', joiValidator(fetchValidateEmail, 'query'), signUpController.validateEmail);
router.get('/validatemobile', joiValidator(fetchValidateMobile, 'query'), signUpController.validateMobile);
router.post('/invitecolleague', signUpController.inviteColleague);

module.exports = router;