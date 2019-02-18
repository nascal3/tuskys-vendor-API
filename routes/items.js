const express = require('express');
const router = express.Router();
const ItemModel = require('../models/ItemModel');
const TransSalesEntryModel = require('../models/TransSalesEntryModel');
require('express-async-errors');

// GET ALL ITEMS
router.get('/:page', async (req, res) => {

  let limit = 50;   // number of records per page
  let offset;

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const items = await ItemModel.findAll({
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': items});
});

// GET AN ITEM WITH THE ITEM NUMBER
router.get('/item/:itemNum/:page', async (req, res) => {

  let limit = 25;   // number of records per page
  let offset;

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const item = await ItemModel.findAll({
    order: [
      [{model:TransSalesEntryModel, as: 'Sales'}, 'Transaction_No', 'DESC']
    ],
    limit: limit,
    offset: offset,

    include: [{
      model:TransSalesEntryModel,
      as: 'Sales',
      attributes: {exclude: ['timestamp']}
    }],
    where: { No: req.params.itemNum },
    attributes: {exclude: ['timestamp']}
  });

  //Filter out only all transactions and store in array
  const sales = [];
  item.map(trans => {
    sales.push(trans.Sales);
  });

  res.status(200).json({'result': item[0], 'transactions': sales});
});

module.exports = router;
