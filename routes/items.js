const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();
const storage = require('node-persist');
const auth = require('../middleware/auth');
const ItemModel = require('../models/ItemModel');
const TransSalesEntryModel = require('../models/TransSalesEntryModel');
require('express-async-errors');

// GET ALL ITEMS
router.get('/:page', auth, async (req, res) => {

  let limit = 50;   // number of records per page
  let pages = 0;
  let offset;

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

  res.status(200).json({'result': items, 'pages': pages});
});

// GET ALL ITEMS BY SPECIFIC VENDOR
router.get('/vendor/:vnum/:page', auth, async (req, res) => {

  await storage.init(); // initialize state storage
  let vendorNum = req.params.vnum;

  let limit = 50;   // number of records per page
  let pages = 0 || await storage.getItem('itemNumOfPages');
  let offset;

  const data = async () => {
    const res = await ItemModel.findAndCountAll({
      where: {
        Vendor_No: vendorNum
      }
    });
    pages = Math.ceil(res.count / limit);
    await storage.setItem('itemNumOfPages', pages);
    await storage.setItem('venNum', vendorNum);
  };
  if (await storage.getItem('venNum') === undefined) {
    await data();
  } else if (await storage.getItem('venNum') !== vendorNum) {
    await data();
  }

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

  res.status(200).json({'result': items, 'pages': pages});
});

// FUNCTION - GET TRANSACTIONS FOR SPECIFIC ITEM NUMBER
const getTrans = async (itemNum, page, fromDate, toDate) => {

  await storage.init(); // initialize state storage

  let limit = 50;   // number of records per page
  let offset;
  let pages = 0 || await storage.getItem('transNumOfPages');

  // count all the records from DB
  const data = async () => {
      const res = await TransSalesEntryModel.findAndCountAll({
          where: {
              Item_No: itemNum,
              Date: {
                  [Op.gte]: fromDate,
                  [Op.lte]: toDate
              }
          }
      });
      pages = Math.ceil(res.count / limit);
      await storage.setItem('ItemNumber',itemNum);
      await storage.setItem('transNumOfPages',pages);
  };
  if (await storage.getItem('ItemNumber') === undefined) {
    // --> create storage & set item number & pages into storage
    await data();
  } else if (await storage.getItem('ItemNumber') !== itemNum) {
    // --> set item number & pages into storage if different item is requested
    await data();
  }

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

  return { 'transactions': trans, 'pages': pages}

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

  res.status(200).json({'item': item, 'transactions': sales.transactions, 'pages': sales.pages});
});

module.exports = router;
