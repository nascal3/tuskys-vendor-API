const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const offerModel = sequelize.define('Offer', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  No: {
    type:Sequelize.STRING(20),
    field: 'No_',
    primaryKey: true,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Price_Group: {
    type: Sequelize.STRING(10),
    field: 'Price Group',
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  },
  No_Series: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  Disc_Validation_Period_ID: {
    type: Sequelize.INTEGER,
    field: 'Disc_ Validation Period ID',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Offer',
  timestamps: false,
  freezeTableName: true,
});

module.exports = offerModel;
