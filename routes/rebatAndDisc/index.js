const express = require("express");
const rebatAndDiscController = require("../../controllers/rebatAndDisc");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  fetchDDCarrierSchema,
  fetchDDVoyageSchema,
  fetchDDChargeTypeSchema,
  fetchDDCommodityGrpSchema,
  fetchDDBookingSchema,
} = require("../../schema/rebatAndDisc/index");

router.get(
  "/FetchDDCarrier",
  joiValidator(fetchDDCarrierSchema, "query"),
  rebatAndDiscController.fetchDDCarrier
);
router.get(
  "/FetchDDVoyage",
  joiValidator(fetchDDVoyageSchema, "query"),
  rebatAndDiscController.fetchDDVoyage
);
router.get(
  "/FetchDDChargeType",
  joiValidator(fetchDDChargeTypeSchema, "query"),
  rebatAndDiscController.fetchDDChargeType
);
router.get(
  "/FetchDDCommodityGrp",
  joiValidator(fetchDDCommodityGrpSchema, "query"),
  rebatAndDiscController.fetchDDCommodityGrp
);
router.get(
  "/FetchDDBooking",
  joiValidator(fetchDDBookingSchema, "query"),
  rebatAndDiscController.fetchDDBooking
);

module.exports = router;
