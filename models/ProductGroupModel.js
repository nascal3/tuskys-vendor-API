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
  Warehouse_Class_Code: {
    type: Sequelize.STRING(10),
    field: 'Warehouse Class Code',
    allowNull: false
  },
  Allow_PO_Price_Change: {
    type:Sequelize.INTEGER,
    field: 'Allow PO Price Change',
    allowNull: false
  },
  Shelf_Label_Description: {
    type:Sequelize.STRING(30),
    field: 'Shelf Label Description',
    allowNull: false
  },
  POS_Menu_Link: {
    type:Sequelize.STRING(10),
    field: 'POS Menu Link',
    allowNull: false
  },
  Barcode_Mask: {
    type:Sequelize.STRING(22),
    field: 'Barcode Mask',
    allowNull: false
  },
  Use_EAN_Standard_Barc: {
    type:Sequelize.INTEGER,
    field: 'Use EAN Standard Barc_',
    allowNull: false
  },
  Def_Gen_Prod_Posting_Group: {
    type:Sequelize.STRING(10),
    field: 'Def_ Gen_ Prod_ Posting Group',
    allowNull: false
  },
  Def_VAT_Prod_Posting_Group: {
    type:Sequelize.STRING(10),
    field: 'Def_ VAT Prod_ Posting Group',
    allowNull: false
  },
  Def_Inventory_Posting_Group: {
    type:Sequelize.DECIMAL,
    field: 'Def_ Inventory Posting Group',
    allowNull: false
  },
  Default_Profit_Perc: {
    type:Sequelize.DECIMAL,
    field: 'Default Profit %',
    allowNull: false
  },
  Dispense_Printer_Group: {
    type:Sequelize.DECIMAL,
    field: 'Dispense Printer Group',
    allowNull: false
  },
  Disable_Dispense_Printing: {
    type:Sequelize.INTEGER,
    field: 'Disable Dispense Printing',
    allowNull: false
  },
  POS_Inventory_Lookup: {
    type:Sequelize.INTEGER,
    field: 'POS Inventory Lookup',
    allowNull: false
  },
  Last_Date_Modified: {
    type:Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  },
  Def_Costing_Method: {
    type:Sequelize.INTEGER,
    field: 'Def_ Costing Method',
    allowNull: false
  },
  Def_Tax_Group_Code: {
    type:Sequelize.STRING(10),
    field: 'Def_ Tax Group Code',
    allowNull: false
  },
  Variant_Framework_Code: {
    type:Sequelize.STRING(20),
    field: 'Variant Framework Code',
    allowNull: false
  },
  Primary_Key: {
    type:Sequelize.STRING(30),
    field: 'Primary Key',
    allowNull: false
  },
  Division_Code: {
    type:Sequelize.STRING(10),
    field: 'Division Code',
    allowNull: false
  },
  Item_Error_Check_Code: {
    type:Sequelize.STRING(10),
    field: 'Item Error Check Code',
    allowNull: false
  },
  Suggested_Qty_On_POS: {
    type:Sequelize.DECIMAL,
    field: 'Suggested Qty_ on POS',
    allowNull: false
  },
  Default_Base_UOM: {
    type:Sequelize.STRING(10),
    field: 'Default Base UOM',
    allowNull: false
  },
  Qty_not_In_Decimal: {
    type:Sequelize.INTEGER,
    field: 'Qty not in Decimal',
    allowNull: false
  },
  Profit_Goal_Prec: {
    type:Sequelize.DECIMAL,
    field: 'Profit Goal %',
    allowNull: false
  },
  Buyer_Group_Code: {
    type:Sequelize.STRING(10),
    field: 'Buyer Group Code',
    allowNull: false
  },
  Replen_Data_Profile: {
    type:Sequelize.STRING(10),
    field: 'Replen_ Data Profile',
    allowNull: false
  },
  Buyer_ID: {
    type:Sequelize.STRING(20),
    field: 'Buyer ID',
    allowNull: false
  },
  Replen_Distribution_Rule_Code: {
    type:Sequelize.STRING(10),
    field: 'Replen_ Distribution Rule Code',
    allowNull: false
  },
  Exclude_Loyalty_Redeemption: {
    type:Sequelize.INTEGER,
    field: 'Exclude Loyalty Redeemption',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Product Group',
  timestamps: false,
  freezeTableName: true,
});

module.exports = productGroupModel;
