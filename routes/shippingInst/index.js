const express = require("express");
const shippingInstController = require("../../controllers/shippingInst");

const router = express.Router();
const joiValidator = require("../../middleware/joi");
const {
  fetchDDCarrierSchema,fetchDDVoyageSchema,fetchDDPOLSchema,
  fetchDDPODSchema,fetchDDBookingSchema,} = require("../../schema/shippingInst/index");

router.get("/FetchDDCarrier",joiValidator(fetchDDCarrierSchema, "query"),shippingInstController.fetchDDCarrier);
router.get("/FetchDDVoyage",joiValidator(fetchDDVoyageSchema, "query"),shippingInstController.fetchDDVoyage);
router.get("/FetchDDPOL",joiValidator(fetchDDPOLSchema, "query"),shippingInstController.fetchDDPOL);
router.get("/FetchDDPOD",joiValidator(fetchDDPODSchema, "query"),shippingInstController.fetchDDPOD);
router.get("/FetchDDBooking",joiValidator(fetchDDBookingSchema, "query"),shippingInstController.fetchDDBooking);

module.exports = router;
