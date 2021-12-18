const express = require('express');
const signUpController = require('../../controllers/signup');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const { fetchSignUpSchema, fetchLocationsSchema, fetchCustomerSchema, fetchValidateEmail,fetchValidateMobile, inviteColleague } = require('../../schema/signup/index')

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
router.post('/invitecolleague', joiValidator(inviteColleague, 'body'), signUpController.inviteColleague);

module.exports = router;