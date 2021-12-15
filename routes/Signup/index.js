FetchNotifications/FetchNotifications

const express = require('express');
const signUpController = require('../../controllers/signup');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
// const { menuSchema } = require('../../schema/index')

router.get('/fetchnotifications', joiValidator(menuSchema, 'query'), signUpController.fetchNotifications);
router.post('/fetchalerts', joiValidator(menuSchema, 'query'), signUpController.fetchAlerts);
router.get('/fetchsignup', joiValidator(menuSchema, 'query'), signUpController.fetchSignUp);
router.get('/saveuserdetails', joiValidator(menuSchema, 'query'), signUpController.saveUserDetails);
router.get('/fetchcountries', joiValidator(menuSchema, 'query'), signUpController.fetchCountries);
router.get('/fetchlocations', joiValidator(menuSchema, 'query'), signUpController.fetchLocations);
router.get('/fetchmlocompanies', joiValidator(menuSchema, 'query'), signUpController.fetchMloCompanies);
router.get('/fetchfustomer', joiValidator(menuSchema, 'query'), signUpController.fetchCustomer);
router.get('/fetchdesignation', joiValidator(menuSchema, 'query'), signUpController.fetchDesignation);
router.get('/validateemail', joiValidator(menuSchema, 'query'), signUpController.validateMobile);
router.get('/validatemobile', joiValidator(menuSchema, 'query'), signUpController.validateMobile);
router.post('/invitecolleague', joiValidator(menuSchema, 'query'), signUpController.inviteColleague);



module.exports = router;