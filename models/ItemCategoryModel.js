const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const itemCategoryModel = sequelize.define('Item_Category', {
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
  Def_Gen_Prod_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Def_ Gen_ Prod_ Posting Group',
    allowNull: false
  },
  Def_Inventory_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Def_ Inventory Posting Group',
    allowNull: false
  },
  Division_Code: {
    type: Sequelize.STRING(10),
    field: 'Division Code',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Item Category',
  timestamps: false,
  freezeTableName: true,
});

module.exports = itemCategoryModel;
