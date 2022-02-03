const express = require("express");
const requestRateController = require("../../controllers/requestRate");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  fetchDDCarrierSchema,
  fetchDDPolSchema,
  fetchDDPodSchema,
  fetchDDVoyageSchema,
  fetchDDCommodityGroupSchema,
  fetchDDContainerTypeSchema,
  fetchDDCountriesSchema,
  validContractExistsSchema,
  fetchMyDetailsSchema,
} = require("../../schema/requestRate/index");

router.get(
  "/FetchDDCarrier",
  joiValidator(fetchDDCarrierSchema, "query"),
  requestRateController.fetchDDCarrier
);
router.get(
  "/FetchDDPol",
  joiValidator(fetchDDPolSchema, "query"),
  requestRateController.fetchDDPol
);
router.get(
  "/FetchDDPod",
  joiValidator(fetchDDPodSchema, "query"),
  requestRateController.fetchDDPod
);
router.get(
  "/FetchDDVoyage",
  joiValidator(fetchDDVoyageSchema, "query"),
  requestRateController.fetchDDVoyage
);
router.get(
  "/FetchDDCommodityGroup",
  joiValidator(fetchDDCommodityGroupSchema, "query"),
  requestRateController.fetchDDCommodityGroup
);
router.get(
  "/FetchDDContainerType",
  joiValidator(fetchDDContainerTypeSchema, "query"),
  requestRateController.fetchDDContainerType
);
router.get(
  "/FetchDDCountries",
  joiValidator(fetchDDCountriesSchema, "query"),
  requestRateController.fetchDDCountries
);
router.get(
  "/ValidContractExists",
  joiValidator(validContractExistsSchema, "query"),
  requestRateController.validContractExists
);
router.get(
  "/FetchMyDetails",
  joiValidator(fetchMyDetailsSchema, "query"),
  requestRateController.fetchMyDetails
);

module.exports = router;
