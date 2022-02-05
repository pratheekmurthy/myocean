const express = require("express");
const provBookingController = require("../../controllers/provBooking");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  fetchDDCarrierSchema,
  fetchDDVoyageSchema,
  fetctDDServiceSchema,
  fetchDDPOLSchema,
  fetchDDPODSchema,
  fetchDDBookingSchema,
} = require("../../schema/provBooking/index");

router.get(
  "/FetchDDCarrier",
  joiValidator(fetchDDCarrierSchema, "query"),
  provBookingController.fetchDDCarrier
);
router.get(
  "/FetctDDService",
  joiValidator(fetctDDServiceSchema, "query"),
  provBookingController.fetctDDService
);
router.get(
  "/FetchDDVoyage",
  joiValidator(fetchDDVoyageSchema, "query"),
  provBookingController.fetchDDVoyage
);
router.get(
  "/FetchDDPOL",
  joiValidator(fetchDDPOLSchema, "query"),
  provBookingController.fetchDDPOL
);
router.get(
  "/FetchDDPOD",
  joiValidator(fetchDDPODSchema, "query"),
  provBookingController.fetchDDPOD
);
router.get(
  "/FetchDDBooking",
  joiValidator(fetchDDBookingSchema, "query"),
  provBookingController.fetchDDBooking
);

module.exports = router;
