const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const itemVendorModel = sequelize.define('Item_Vendor', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Vendor_No: {
    type:Sequelize.STRING(20),
    field: 'Vendor No_',
    primaryKey: true,
    allowNull: false
  },
  Item_No: {
    type:Sequelize.STRING(20),
    field: 'Item No_',
    primaryKey: true,
    allowNull: false
  },
  Variant_Code: {
    type:Sequelize.STRING(10),
    field: 'Variant Code',
    primaryKey: true,
    allowNull: false
  },
  Lead_Time_Calculation: {
    type: Sequelize.STRING(32),
    field: 'Lead Time Calculation',
    allowNull: false
  },
  Priority: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Item Vendor',
  timestamps: false,
  freezeTableName: true,
});

module.exports = itemVendorModel;
