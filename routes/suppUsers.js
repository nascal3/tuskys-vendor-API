const express = require('express');
const router = express.Router();
const SuppUsers = require('../models/users');
require('express-async-errors');

/* GET users listing. */
router.get('/:page', async (req, res) => {

  let limit = 50;   // number of records per page
  let offset = 0;

  const data = await SuppUsers.findAndCountAll();
  let page = req.params.page;      // page number
  let pages = Math.ceil(data.count / limit);
  offset = limit * (page - 1);

  const users = await SuppUsers.findAll({
    attributes: {exclude: ['timestamp']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
});

module.exports = router;
