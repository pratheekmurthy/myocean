const express = require("express");
const userRuleController = require("../../controllers/userRule");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  getUserRuleDropdownSchema,fetchUserRuleListSchema,fetchUserRuleDetailsSchema,
  getUserRuleAndPreferenceSchema,saveUserRulesSchema,deactivateUserRuleSchema,
  deleteUserRuleSchema,} = require("../../schema/userRule/index");

router.get("/GetUserRuleDropdown",joiValidator(getUserRuleDropdownSchema, "query"),userRuleController.getUserRuleDropdown);
router.get("/FetchUserRuleList/FetchUserRuleList",joiValidator(fetchUserRuleListSchema, "query"),userRuleController.fetchUserRuleList);
router.get("/FetchUserRuleDetails/FetchUserRuleDetails",joiValidator(fetchUserRuleDetailsSchema, "query"),userRuleController.fetchUserRuleDetails);
router.get("/GetUserRuleAndPreference/GetUserRuleAndPreference",joiValidator(getUserRuleAndPreferenceSchema, "query"),userRuleController.getUserRuleAndPreference);
router.post("/SaveUserRules/SaveUserRules", joiValidator(saveUserRulesSchema, "body"), userRuleController.saveUserRules);
router.put("/DeactivateUserRule/DeactivateUserRule",joiValidator(deactivateUserRuleSchema, "body"),userRuleController.deactivateUserRule);
router.delete("/DeleteUserRule/DeleteUserRule",joiValidator(deleteUserRuleSchema, "query"),userRuleController.deleteUserRule);

module.exports = router;
