const express = require('express');
const router = express.Router();
const ItemModel = require('../models/ItemModel');
const TransSalesEntryModel = require('../models/TransSalesEntryModel');
require('express-async-errors');

// GET ALL ITEMS WITH THEIR SALES TRANSACTIONS
router.get('/:page', async (req, res) => {

  let limit = 50;   // number of records per page
  let offset;

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const items = await ItemModel.findAll({
    include: [{
      model:TransSalesEntryModel,
      as: 'Sales',
      attributes: {exclude: ['timestamp']}
    }],
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': items});
});

module.exports = router;
