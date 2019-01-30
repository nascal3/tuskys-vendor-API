const express = require('express');
const suppUsers = require('../routes/suppUsers');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/suppliers', suppUsers);
};
