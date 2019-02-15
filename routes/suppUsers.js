const express = require('express');
const router = express.Router();
const SuppUsers = require('../models/SuppUsersModel');
require('express-async-errors');

/* GET users listing. */
router.get('/:page', async (req, res) => {

  let limit = 50;   // number of records per page
  let offset;

  const data = await SuppUsers.findAndCountAll();
  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
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
