const express = require('express');
const suppUsers = require('../routes/suppUsers');
const vendorLedg = require('../routes/vendorLedg');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/suppliers', suppUsers);
  app.use('/api/vendor', vendorLedg);
};
