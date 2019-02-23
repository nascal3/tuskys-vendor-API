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

// FUNCTION - GET TRANSACTIONS FOR SPECIFIC ITEM NUMBER
const getTrans = async (itemNum, page) => {

  let limit = 50;   // number of records per page
  let offset;

  const data = await TransSalesEntryModel.findAndCountAll({
    where: {Item_No: itemNum}
  });
  let pageNum = parseInt(page);      // page number
  pageNum <= 0 ? pageNum = 1 : pageNum = parseInt(page);
  let pages = Math.ceil(data.count / limit);
  offset = limit * (pageNum - 1);
  console.log('>>>', pages);

  let trans = await TransSalesEntryModel.findAll({
    attributes: {exclude: ['timestamp']},
    where: {Item_No: itemNum},
    limit: limit,
    offset: offset
  });

  return { 'transactions': trans, 'pages': pages}

};

// GET AN ITEM WITH THE ITEM NUMBER
router.get('/item/:itemNum/:page', async (req, res) => {

  let itemNumber = req.params.itemNum;
  let pageNumber = req.params.page;

  const item = await ItemModel.findOne({
    where: { No: itemNumber },
    attributes: {exclude: ['timestamp']}
  });

  let sales = await getTrans(itemNumber, pageNumber);

  res.status(200).json({'item': item, 'transactions': sales.transactions, 'pages': sales.pages});
});

module.exports = router;
