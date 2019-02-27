const express = require('express');
const storage = require('node-persist');
const auth = require('../middleware/auth');
const router = express.Router();
const VendorLedEntry = require('../models/VendorLedgEntryModel');
require('express-async-errors');

// GET ALL VENDORS LEDGERS FOR SPECIFIC VENDOR
router.get('/:venNum/:page', auth, async (req, res) => {

  await storage.init(); // initialize state storage
  let vendorNum = req.params.venNum;

  let limit = 50;   // number of records per page
  let pages = 0 || await storage.getItem('ledgNumOfPages');
  let offset;


  const data = async () => {
    const res = await VendorLedEntry.findAndCountAll({
      where: {
        Vendor_No: vendorNum
      }
    });

    pages = Math.ceil(res.count / limit);
    await storage.setItem('ledgNumOfPages', pages);
    await storage.setItem('venNum', vendorNum);
  };

  if (await storage.getItem('venNum') === undefined) {
    await data();
  } else if (await storage.getItem('venNum') !== vendorNum) {
    await data();
  } else if (await storage.getItem('ledgNumOfPages') === undefined) {
    await data();
  }

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

  res.status(200).json({'result': vendorLedger, 'pages': pages});
});

module.exports = router;
