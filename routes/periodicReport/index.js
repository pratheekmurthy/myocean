const express = require("express");
const periodicReportController = require("../../controllers/periodicReport");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  fetchDDCarrierSchema,
  fetchDDServiceSchema,
  fetchDDVoyageSchema,
  fetchDDPolSchema,
  fetchDDBookingSchema,
} = require("../../schema/periodicReport/index");

router.get(
  "/FetchDDCarrier",
  joiValidator(fetchDDCarrierSchema, "query"),
  periodicReportController.fetchDDCarrier
);
router.get(
  "/FetchDDService",
  joiValidator(fetchDDServiceSchema, "query"),
  periodicReportController.fetchDDService
);
router.get(
  "/FetchDDVoyage",
  joiValidator(fetchDDVoyageSchema, "query"),
  periodicReportController.fetchDDVoyage
);
router.get(
  "/FetchDDPol",
  joiValidator(fetchDDPolSchema, "query"),
  periodicReportController.fetchDDPol
);
router.get(
  "/FetchDDBooking",
  joiValidator(fetchDDBookingSchema, "query"),
  periodicReportController.fetchDDBooking
);

module.exports = router;
