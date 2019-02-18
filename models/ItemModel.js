const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const transSalesEntryModel = require('./TransSalesEntryModel')
const config = require('config');

const itemModel = sequelize.define('Item', {
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
  Base_Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Base Unit of Measure',
    allowNull: false
  },
  Inventory_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Inventory Posting Group',
    allowNull: false
  },
  Unit_Price: {
    type: Sequelize.DECIMAL,
    field: 'Unit Price',
    allowNull: false
  },
  Profit_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Profit %',
    allowNull: false
  },
  Unit_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Unit Cost',
    allowNull: false
  },
  Standard_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Standard Cost',
    allowNull: false
  },
  Last_Direct_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Last Direct Cost',
    allowNull: false
  },
  Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor No_',
    allowNull: false
  },
  Blocked: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATEONLY,
    field: 'Last Date Modified',
    allowNull: false
  },
  Item_Category_Code: {
    type: Sequelize.STRING(10),
    field: 'Item Category Code',
    allowNull: false
  },
  Product_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Product Group Code',
    allowNull: false
  },
  Master_Pack_Qty: {
    type: Sequelize.DECIMAL,
    field: 'Master Pack Qty_',
    allowNull: false
  },
  Date_Created: {
    type: Sequelize.DATE,
    field: 'Date Created',
    allowNull: false
  },
  Created_By_User: {
    type: Sequelize.STRING(20),
    field: 'Created by User',
    allowNull: false
  },
  Division_Code: {
    type: Sequelize.STRING(10),
    field: 'Division Code',
    allowNull: false
  },
  Last_Modified_By_User: {
    type: Sequelize.STRING(20),
    field: 'Last Modified by User',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Item',
  timestamps: false,
  freezeTableName: true,
});

transSalesEntryModel.hasMany(itemModel, {
  foreignKey: 'No',
  sourceKey: 'Item_No'
});

itemModel.belongsTo(transSalesEntryModel, {
  foreignKey: 'No',
  as: 'Sales',
  targetKey: 'Item_No'
});

module.exports = itemModel;
