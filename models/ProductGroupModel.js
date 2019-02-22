const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const productGroupModel = sequelize.define('Product_Group', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Item_Category_Code: {
    type:Sequelize.STRING(10),
    field: 'Item Category Code',
    primaryKey: true,
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
  Last_Date_Modified: {
    type:Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  },
  Division_Code: {
    type:Sequelize.STRING(10),
    field: 'Division Code',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Product Group',
  timestamps: false,
  freezeTableName: true,
});

module.exports = productGroupModel;
