const express = require("express");
const roleController = require("../../controllers/role");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
    fetchRoleSchema,
    saveRoleSchema,
} = require("../../schema/role/index");

router.get(
  "/FetchRole",
  joiValidator(fetchRoleSchema, "query"),
  roleController.fetchRole
);
router.post(
  "/SaveRole",
  joiValidator(saveRoleSchema, "body"),
  roleController.saveRole
);


module.exports = router;
