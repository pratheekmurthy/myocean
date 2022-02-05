const express = require("express");
const spotRateController = require("../../controllers/spotRate");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  fetchDDCarrierSchema,fetchDDTypeSchema,fetchDDContractSchema,
  fetchDDPolSchema,fetchDDPodSchema,fetchDDVoyageSchema,} = require("../../schema/spotRate/index");

router.get("/FetchDDCarrier",joiValidator(fetchDDCarrierSchema, "query"),spotRateController.fetchDDCarrie);
router.get("/FetchDDType",joiValidator(fetchDDTypeSchema, "query"),spotRateController.fetchDDType);
router.get("/FetchDDContract",joiValidator(fetchDDContractSchema, "query"),spotRateController.fetchDDContract);
router.get("/FetchDDPol",joiValidator(fetchDDPolSchema, "query"),spotRateController.fetchDDPol);
router.get("/FetchDDPod",joiValidator(fetchDDPodSchema, "query"),spotRateController.fetchDDPod);
router.get("/FetchDDVoyage",joiValidator(fetchDDVoyageSchema, "query"),spotRateController.fetchDDVoyage);

module.exports = router;
