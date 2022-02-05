const express = require('express');
const receiptController = require('../../controllers/receipt');

const router = express.Router();
const joiValidator = require('../../middleware/joi');
const {
  fetchDDCarrierSchema,fetchDDVoyageSchema,fetchDDInvoiceSchema,
  fetchDDReceiptSchema,} = require('../../schema/receipt/index');

router.get('/FetchDDCarrier',joiValidator(fetchDDCarrierSchema, 'query'),receiptController.fetchDDCarrier);
router.get('/FetchDDVoyage',joiValidator(fetchDDVoyageSchema, 'query'),receiptController.fetchDDVoyage);
router.get('/FetchDDInvoice',joiValidator(fetchDDInvoiceSchema, 'query'),receiptController.fetchDDInvoice);
router.get('/FetchDDReceipt',joiValidator(fetchDDReceiptSchema, 'query'),receiptController.fetchDDReceipt);

module.exports = router;
