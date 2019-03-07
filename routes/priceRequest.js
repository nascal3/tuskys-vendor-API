const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const PriceRequest = require('../models/PriceRequestModel');
require('express-async-errors');

// MAKE PRICE CHANGE REQUEST
router.post('/change/req', auth, async (req, res) => {

  const priceChange = await PriceRequest.create({
    Vendor_No: req.body.vendorNum,
    Name: req.body.name,
    Item: req.body.item,
    Item_No: req.body.itemNum,
    Request_price: req.body.reqPrice
  });

  res.status(200).json({'result': priceChange});
});

module.exports = router;
