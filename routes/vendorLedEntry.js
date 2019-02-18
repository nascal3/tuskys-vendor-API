const express = require('express');
const router = express.Router();
const VendorLedEntry = require('../models/VendorLedgEntryModel');
require('express-async-errors');

// GET ALL VENDORS LEDGERS FOR SPECIFIC VENDOR
router.get('/:venNum/:page', async (req, res) => {

  let limit = 30;   // number of records per page
  let offset;

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const vendorLedger = await VendorLedEntry.findAll({
    order: [
      ['Entry_No', 'DESC'],
    ],
    attributes: {
      exclude: ['timestamp']
    },
    where: {
      Vendor_No: req.params.venNum
    },
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': vendorLedger});
});

module.exports = router;
