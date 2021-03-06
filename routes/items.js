const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();
const auth = require('../middleware/auth');
const sysAdmin = require('../middleware/sysAdmin');
const ItemModel = require('../models/ItemModel');
const TransSalesEntryModel = require('../models/TransSalesEntryModel');
require('express-async-errors');

// GET ALL ITEMS
router.get('/:page', [auth, sysAdmin], async (req, res) => {

  let limit = 50;   // number of records per page
  let pages = 0;
  let offset;
  let pageNumber = req.params.page;

  const data = await ItemModel.findAndCountAll();
  pages = Math.ceil(data.count / limit);

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const items = await ItemModel.findAll({
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': items, 'currentPage': pageNumber, 'pages': pages});
});

// GET ALL ITEMS BY SPECIFIC VENDOR
router.get('/vendor/:page', auth, async (req, res) => {

  // === get vendor number from token in header ===
  let vendorNum = req.user.vendorNo;

  let pageNumber = req.params.page;

  let limit = 50;   // number of records per page
  let pages = 0;
  let offset;

  const data = await ItemModel.findAndCountAll({
    where: {
      Vendor_No: vendorNum
    }
  });
  pages = Math.ceil(data.count / limit);

  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  offset = limit * (page - 1);

  const items = await ItemModel.findAll({
    attributes: {exclude: ['timestamp']},
    where: {
      Vendor_No: vendorNum
    },
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': items, 'currentPage': pageNumber, 'pages': pages});
});

// FUNCTION - GET TRANSACTIONS FOR SPECIFIC ITEM NUMBER
const getTrans = async (itemNum, page, fromDate, toDate) => {

  if (toDate === null || toDate === undefined) {
    toDate = new Date();
  }

  if (fromDate === null || fromDate === undefined) {
    let currentDate = new Date();
    fromDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
  }

  let limit = 50;   // number of records per page
  let offset;
  let pages = 0;

  // count all the records from DB
  const data = await TransSalesEntryModel.findAndCountAll({
      where: {
          Item_No: itemNum,
          Date: {
              [Op.gte]: fromDate,
              [Op.lte]: toDate
          }
      }
  });
  pages = Math.ceil(data.count / limit);

  let pageNum = parseInt(page);      // page number
  pageNum <= 0 ? pageNum = 1 : pageNum = parseInt(page);
  offset = limit * (pageNum - 1);

  let trans = await TransSalesEntryModel.findAll({
    attributes: {exclude: ['timestamp']},
    where: {
      Item_No: itemNum,
      Date: {
        [Op.gte]: fromDate,
        [Op.lte]: toDate
      }
    },
    limit: limit,
    offset: offset
  });

  return { 'transactions': trans, 'count': data.count,  'pages': pages}

};

// GET AN ITEM WITH THE ITEM NUMBER
router.get('/item/:itemNum/:page', auth, async (req, res) => {

  let itemNumber = req.params.itemNum;
  let pageNumber = req.params.page;

  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;

  const item = await ItemModel.findOne({
    where: { No: itemNumber },
    attributes: {exclude: ['timestamp']}
  });

  let sales = await getTrans(itemNumber, pageNumber, fromDate, toDate);

  res.status(200).json({'item': item, 'transactions': sales.transactions,'transactionsCount': sales.count, 'currentPage': pageNumber, 'pages': sales.pages});
});

module.exports = router;
