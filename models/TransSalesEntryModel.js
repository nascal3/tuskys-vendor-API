const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const TransSalesEntryModel = sequelize.define('TransSalesEntry', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Store_No: {
    type:Sequelize.STRING(10),
    field: 'Store No_',
    primaryKey: true,
    allowNull: false
  },
  POS_Terminal_No: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    field: 'POS Terminal No_',
    allowNull: false
  },
  Transaction_No: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'Transaction No_',
    allowNull: false
  },
  Line_No: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'Line No_',
    allowNull: false
  },
  Receipt_No: {
    type: Sequelize.STRING(20),
    field: 'Receipt No_',
    allowNull: false
  },
  Barcode_No: {
    type: Sequelize.STRING(22),
    field: 'Barcode No_',
    allowNull: false
  },
  Item_No: {
    type: Sequelize.STRING(20),
    field: 'Item No_',
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
  Price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Net_Price: {
    type: Sequelize.DECIMAL,
    field: 'Net Price',
    allowNull: false
  },
  Quantity: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  VAT_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'VAT Bus_ Posting Group',
    allowNull: false
  },
  VAT_Code: {
    type: Sequelize.STRING(10),
    field: 'VAT Code',
    allowNull: false
  },
  Cost_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Cost Amount',
    allowNull: false
  },
  Date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  Time: {
    type: Sequelize.DATE,
    allowNull: false
  },
  Shift_Date: {
    type: Sequelize.DATEONLY,
    field: 'Shift Date',
    allowNull: false
  },
  Net_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Net Amount',
    allowNull: false
  },
  VAT_Amount: {
    type: Sequelize.DECIMAL,
    field: 'VAT Amount',
    allowNull: false
  },
  Promotion_No: {
    type: Sequelize.STRING(20),
    field: 'Promotion No_',
    allowNull: false
  },
  Standard_Net_Price: {
    type: Sequelize.DECIMAL,
    field: 'Standard Net Price',
    allowNull: false
  },
  Disc_Amount_From_Std_Price: {
    type: Sequelize.DECIMAL,
    field: 'Disc_ Amount From Std_ Price',
    allowNull: false
  },
  Customer_No: {
    type: Sequelize.STRING(20),
    field: 'Customer No_',
    allowNull: false
  },
  Staff_ID: {
    type: Sequelize.STRING(20),
    field: 'Staff ID',
    allowNull: false
  },
  Item_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Item Posting Group',
    allowNull: false
  },
  Variant_Code: {
    type: Sequelize.STRING(10),
    field: 'Variant Code',
    allowNull: false
  },
  Refund_Qty: {
    type: Sequelize.DECIMAL,
    field: 'Refund Qty_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Trans_ Sales Entry',
  timestamps: false,
  freezeTableName: true,
});

module.exports = TransSalesEntryModel;
