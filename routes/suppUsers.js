const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const generateToken = require('../models/usersTokenGen');
const SuppUsers = require('../models/SuppUsersModel');
require('express-async-errors');

/* GET users listing. */
router.get('/list/:page', async (req, res) => {

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

// LOGIN USERS PROCESS
router.get('/login', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const userData = await SuppUsers.findOne({
    attributes: {exclude: ['timestamp']},
    where: {
      Email: username
    }
  });

  if (!userData) return res.status(400).json({'Error': 'Wrong username or Password is wrong'});

  // check password validity
  const validPassword = await bcrypt.compare(password, userData.password);
  if (!validPassword) return res.status(400).json({'Error': 'Wrong username or Password is wrong'});

  // generate user tokens
  const token = generateToken(userData.User_ID, userData.Vendor_No, userData.Fullname, userData.Email, userData.Phone, userData.Level );

  // set authorisation header
  return res.header('Authorization', token).status(200).json({'user':userData, 'token': token});

});

module.exports = router;
