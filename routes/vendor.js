const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const sysAdmin = require('../middleware/sysAdmin');
const Vendor = require('../models/VendorModel');
require('express-async-errors');

// GET ALL VENDORS
router.get('/list/:page', [auth, sysAdmin], async (req, res) => {

  let limit = 50;   // number of records per page
  let pageNumber = req.params.page;
  let offset;

  const data = await Vendor.findAndCountAll();
  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  let pages = Math.ceil(data.count / limit);
  offset = limit * (page - 1);

  const vendors = await Vendor.findAll({
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': vendors, 'currentPage': pageNumber, 'pages': pages});
});

// GET ALL VENDOR BY VENDOR NUMBER
router.get('/:num', auth, async (req, res) => {

  const vendor = await Vendor.findOne({
    where: { No: req.params.num },
    attributes: {exclude: ['timestamp']}
  });

  res.status(200).json({'result': vendor});
});

module.exports = router;
