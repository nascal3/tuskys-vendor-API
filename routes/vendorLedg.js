const express = require('express');
const router = express.Router();
const VendorLedgEntry = require('../models/VendorLedgEntryModel');
const Vendor = require('../models/VendorModel');
require('express-async-errors');

router.get('/:page', async (req, res) => {

  let limit = 50;   // number of records per page
  let offset;

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const users = await Vendor.findAll({
    include: [VendorLedgEntry],
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': users});
});

router.get('/ledger/:page', async (req, res) => {

  let limit = 50;   // number of records per page
  let offset;

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const users = await VendorLedgEntry.findAll({
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': users});
});

module.exports = router;
