const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const VendorLedEntry = require('../models/VendorLedgEntryModel');
require('express-async-errors');

// GET ALL VENDORS LEDGERS FOR SPECIFIC VENDOR
router.get('/:venNum/:page', auth, async (req, res) => {

  let vendorNum = req.params.venNum;

  let limit = 50;   // number of records per page
  let pages = 0;
  let offset;

  const data = await VendorLedEntry.findAndCountAll({
    where: {
      Vendor_No: vendorNum
    }
  });

  pages = Math.ceil(data.count / limit);

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
      Vendor_No: vendorNum
    },
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': vendorLedger, 'pages': pages});
});

module.exports = router;
