const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const returnShipmentLineModel = sequelize.define('Return_Shipment_Line', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Document_No: {
    type:Sequelize.STRING(20),
    field: 'Document No_',
    primaryKey: true,
    allowNull: false
  },
  Line_No: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'Line No_',
    allowNull: false
  },
  Buy_from_Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Buy-from Vendor No_',
    allowNull: false
  },
  Type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  No: {
    type: Sequelize.STRING(20),
    field: 'No_',
    allowNull: false
  },
  Location_Code: {
    type: Sequelize.STRING(10),
    field: 'Location Code',
    allowNull: false
  },
  Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Posting Group',
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Unit of Measure',
    allowNull: false
  },
  Quantity: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Direct_Unit_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Direct Unit Cost',
    allowNull: false
  },
  Unit_Cost_LCY: {
    type: Sequelize.DECIMAL,
    field: "[Unit Cost (LCY)]",
    allowNull: false
  },
  VAT_Perc: {
    type: Sequelize.DECIMAL,
    field: 'VAT %',
    allowNull: false
  },
  Unit_Price_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Unit Price (LCY)"',
    allowNull: false
  },
  Item_Shpt_Entry_No: {
    type: Sequelize.INTEGER,
    field: 'Item Shpt_ Entry No_',
    allowNull: false
  },
  Shortcut_Dimension_1_Code: {
    type: Sequelize.STRING(20),
    field: 'Shortcut Dimension 1 Code',
    allowNull: false
  },
  Quantity_Invoiced: {
    type: Sequelize.DECIMAL,
    field: 'Quantity Invoiced',
    allowNull: false
  },
  Pay_To_Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Pay-to Vendor No_',
    allowNull: false
  },
  Gen_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Gen_ Bus_ Posting Group',
    allowNull: false
  },
  Gen_Prod_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Gen_ Prod_ Posting Group',
    allowNull: false
  },
  VAT_Base_Amount: {
    type: Sequelize.DECIMAL,
    field: 'VAT Base Amount',
    allowNull: false
  },
  Unit_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Unit Cost',
    allowNull: false
  },
  Posting_Date: {
    type: Sequelize.DATEONLY,
    field: 'Posting Date',
    allowNull: false
  },
  Unit_Of_Measure_Code: {
    type: Sequelize.STRING(10),
    field: 'Unit of Measure Code',
    allowNull: false
  },
  Quantity_Base: {
    type: Sequelize.DECIMAL,
    field: "[Quantity (Base)]",
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
  Return_Qty_Shipped_Not_Invd: {
    type: Sequelize.DECIMAL,
    field: 'Return Qty_ Shipped Not Invd_',
    allowNull: false
  },
  Item_Charge_Base_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Item Charge Base Amount',
    allowNull: false
  },
  Return_Order_No: {
    type: Sequelize.STRING(20),
    field: 'Return Order No_',
    allowNull: false
  },
  Return_Order_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Return Order Line No_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Return Shipment Line',
  timestamps: false,
  freezeTableName: true,
});

module.exports = returnShipmentLineModel;
