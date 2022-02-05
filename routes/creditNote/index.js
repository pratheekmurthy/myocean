const express = require('express');
const creditNoteController = require('../../controllers/creditNote');

const router = express.Router();
const joiValidator = require('../../middleware/joi')
const {fetchDDCarrierSchema,fetchDDVoyageSchema,fetchDDInvoiceSchema,fetchCreditNoteListSchema } = require('../../schema/creditNote/index')

router.get('/FetchDDCarrier', joiValidator(fetchDDCarrierSchema,'query'), creditNoteController.fetchDDCarrier);
router.get('/FetchDDVoyage', joiValidator(fetchDDVoyageSchema,'query'),creditNoteController.fetchDDVoyage);
router.get('/FetchDDInvoice', joiValidator(fetchDDInvoiceSchema,'query'), creditNoteController.fetchDDInvoice);
router.get('/FetchCreditNoteList', joiValidator(fetchCreditNoteListSchema,'query'), creditNoteController.fetchCreditNoteList);





module.exports = router;