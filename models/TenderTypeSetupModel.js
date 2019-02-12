const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const TenderTypeSetupModel = sequelize.define('TenderTypeSetup', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Code: {
    type:Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Default_Function: {
    type: Sequelize.INTEGER,
    field: 'Default Function',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Tender Type Setup',
  timestamps: false,
  freezeTableName: true,
});

module.exports = TenderTypeSetupModel;
