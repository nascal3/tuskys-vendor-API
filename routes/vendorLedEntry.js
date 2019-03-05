const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const auth = require('../middleware/auth');
const router = express.Router();
const VendorLedEntry = require('../models/VendorLedgEntryModel');
require('express-async-errors');

// GET ALL VENDORS LEDGERS FOR SPECIFIC VENDOR BETWEEN SPECIFIC DATES
router.get('/:venNum/:page', auth, async (req, res) => {

  let vendorNum = req.params.venNum;
  let pageNumber = req.params.page;
  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;

  if (toDate === null || toDate === undefined) {
    toDate = new Date();
    console.log('toDate',toDate);
  }

  if (fromDate === null || fromDate === undefined) {
    let currentDate = new Date();
    fromDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    console.log('fromDate',fromDate);
  }

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
      Vendor_No: vendorNum,
      Posting_Date: {
        [Op.gte]: fromDate,
        [Op.lte]: toDate
      }
    },
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': vendorLedger, 'currentPage': pageNumber, 'pages': pages});
});

module.exports = router;
