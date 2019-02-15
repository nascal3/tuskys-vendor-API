const express = require('express');
const suppUsers = require('../routes/suppUsers');
const vendor = require('../routes/vendor');
const items = require('../routes/items');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/suppliers', suppUsers);
  app.use('/api/vendor', vendor);
  app.use('/api/items',items );
};
