const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const storeModel = sequelize.define('Store', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  No: {
    type:Sequelize.STRING(10),
    field: 'No_',
    primaryKey: true,
    allowNull: false
  },
  Responsibility_Center: {
    type: Sequelize.STRING(10),
    field: 'Responsibility Center',
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  City: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Location_Code: {
    type: Sequelize.STRING(10),
    field: 'Location Code',
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Store',
  timestamps: false,
  freezeTableName: true,
});

module.exports = storeModel;
