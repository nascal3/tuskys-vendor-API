const Sequelize = require('sequelize');
const sequelize = require('../startup/db');

const priceRequestModel = sequelize.define('Price_Request', {
  Req_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Vendor_No: {
    type:Sequelize.STRING(50),
    primaryKey: true,
    allowNull: false
  },
  Fullname: {
    type:Sequelize.STRING(50),
    allowNull: false
  },
  Item: {
    type:Sequelize.STRING(50),
    allowNull: false
  },
  Item_No: {
    type:Sequelize.INTEGER,
    allowNull: false
  },
  Request_price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  RequestDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  Approval_Status: {
    type:Sequelize.STRING(50),
    defaultValue: "pending",
    allowNull: false
  },
  Approved_By: {
    type:Sequelize.STRING(50),
    allowNull: true
  },
  Approval_Date: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  schema: 'dbo',
  tableName: 'Price_Request',
  timestamps: false,
  freezeTableName: true,
});

module.exports = priceRequestModel;
