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
  Def_Tax_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Def_ Tax Group Code',
    allowNull: false
  },
  Def_Costing_Method: {
    type: Sequelize.INTEGER,
    field: 'Def_ Costing Method',
    allowNull: false
  },
  Def_VAT_Prod_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Def_ VAT Prod_ Posting Group',
    allowNull: false
  },
  Allow_PO_Price_Change: {
    type: Sequelize.INTEGER,
    field: 'Allow PO Price Change',
    allowNull: false
  },
  Item_No_Miscellaneous: {
    type: Sequelize.STRING(20),
    field: 'Item No_ Miscellaneous',
    allowNull: false
  },
  Negative: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Not_Discountable: {
    type: Sequelize.INTEGER,
    field: 'Not Discountable',
    allowNull: false
  },
  Difference_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Difference (LCY)"',
    allowNull: false
  },
  Difference_Perc: {
    type: Sequelize.DECIMAL,
    field: '"Difference (%)"',
    allowNull: false
  },
  Item_Hierarchy_Value: {
    type: Sequelize.STRING(20),
    field: 'Item Hierarchy Value',
    allowNull: false
  },
  POS_Inventory_Lookup: {
    type: Sequelize.INTEGER,
    field: 'POS Inventory Lookup',
    allowNull: false
  },
  Default_Profit_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Default Profit %',
    allowNull: false
  },
  Dispense_Printer_Group: {
    type: Sequelize.STRING(10),
    field: 'Dispense Printer Group',
    allowNull: false
  },
  Dispense_Print_Seq_No: {
    type: Sequelize.INTEGER,
    field: 'Dispense Print Seq_ No_',
    allowNull: false
  },
  Division_Code: {
    type: Sequelize.STRING(10),
    field: 'Division Code',
    allowNull: false
  },
  Item_Error_Check_Code: {
    type: Sequelize.STRING(10),
    field: 'Item Error Check Code',
    allowNull: false
  },
  Suggested_Qty_On_POS: {
    type: Sequelize.DECIMAL,
    field: 'Suggested Qty_ on POS',
    allowNull: false
  },
  Profit_Goal_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Profit Goal %',
    allowNull: false
  },
  Buyer_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Buyer Group Code',
    allowNull: false
  },
  Replen_Data_Profile: {
    type: Sequelize.STRING(10),
    field: 'Replen_ Data Profile',
    allowNull: false
  },
  Buyer_ID: {
    type: Sequelize.STRING(20),
    field: 'Buyer ID',
    allowNull: false
  },
  Replen_Distribution_Rule_Code: {
    type: Sequelize.STRING(10),
    field: 'Replen_ Distribution Rule Code',
    allowNull: false
  },
  Replenishment_Rule_Code: {
    type: Sequelize.STRING(10),
    field: 'Replenishment Rule Code',
    allowNull: false
  },
  Exclude_Loyalty_Redeemption: {
    type: Sequelize.INTEGER,
    field: 'Exclude Loyalty Redeemption',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Item Category',
  timestamps: false,
  freezeTableName: true,
});

module.exports = itemCategoryModel;
