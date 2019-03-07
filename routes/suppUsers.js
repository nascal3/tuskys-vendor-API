const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const generateToken = require('../models/usersTokenGen');
const auth = require('../middleware/auth');
const SuppUsers = require('../models/SuppUsersModel');
require('express-async-errors');

/* GET A LIST OF ALL USERS. */
router.get('/list/:page', auth, async (req, res) => {

  let limit = 50;   // number of records per page
  let offset;
  let pageNumber = req.params.page;

  const data = await SuppUsers.findAndCountAll();
  let page = parseInt(req.params.page);      // page number
  page <= 0 ? page = 1 : page = parseInt(req.params.page);
  let pages = Math.ceil(data.count / limit);
  offset = limit * (page - 1);

  const users = await SuppUsers.findAll({
    attributes: {exclude: ['Password']},
    limit: limit,
    offset: offset
  });

  res.status(200).json({'result': users, 'currentPage': pageNumber, 'pages': pages});
});

// LOGIN USERS PROCESS
router.post('/login', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const userData = await SuppUsers.findOne({
    attributes: {exclude: ['timestamp']},
    where: {
      Username: username
    }
  });

  if (!userData) return res.status(400).json({'Error': 'Wrong username or Password'});

  // check password validity
  const validPassword = await bcrypt.compare(password, userData.Password);
  if (!validPassword) return res.status(400).json({'Error': 'Wrong username or Password'});

  // generate user tokens
  const token = generateToken(userData.User_ID, userData.Vendor_No, userData.Fullname, userData.Email, userData.Phone, userData.Level );

  // remove password data from json results
  userData.Password = undefined;

  // set authorisation header
  return res.header('Authorization', token).status(200).json({'user':userData, 'token': token});

});

// REGISTER NEW USERS PROCESS
router.post('/register', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let fullname = req.body.fullname;
  let phone = req.body.phone;
  let vendorNum = req.body.vendornum;
  let level = req.body.level;

  if (level === undefined) level = 1;

  const userEmail = await SuppUsers.findOne({
    attributes: {exclude: ['timestamp']},
    where: {
      Email: username
    }
  });

  if (userEmail !== null) return res.status(400).json({'Error': 'The following Email/Username already exists!'});

  // validate vendor number if vendor number already exists
  if (vendorNum)  {
    const vendor = await SuppUsers.findOne({
      attributes: {exclude: ['timestamp']},
      where: {
        Vendor_No: vendorNum
      }
    });

    if (vendor !== null) return res.status(400).json({'Error': 'The following vendor number already exists!'});
  }

  // SALT THE PASSWORD AND INSERT NEW USER INTO DB
  const salt = await bcrypt.genSalt(10);
  const salted_password = await bcrypt.hash(password, salt);

  const userData = await SuppUsers.create({
    Vendor_No: vendorNum,
    Fullname: fullname,
    Email: username,
    Phone: phone,
    Username: username,
    Password: salted_password,
    Level: level
  });

  //generate User token
  const token = generateToken(userData.User_ID, userData.Vendor_No, userData.Fullname, userData.Email, userData.Phone, userData.Level );

  // remove password data from json results
  userData.Password = undefined;

  // set authorisation header
  return res.header('Authorization', token).status(200).json({'user':userData, 'token': token});

});

// REGISTERED USERS CHANGE THEIR ACCOUNT INFO
router.post('/account', auth, async (req, res) => {

  const userChange = await SuppUsers.update(
      {
        Email: req.body.email,
        Phone: req.body.phone
      },
      {
        where: {
          Username: req.body.username
        }
      }
  );

  res.status(200).json({'result': userChange});
});

// SYSTEM ADMINS CHANGE USERS ACCESS LEVEL INFO
router.post('/settings', auth, async (req, res) => {

  const userChange = await SuppUsers.update(
      {
        Level: req.body.level
      },
      {
        where: {
          Username: req.body.username
        }
      }
  );

  res.status(200).json({'result': userChange});
});

module.exports = router;
