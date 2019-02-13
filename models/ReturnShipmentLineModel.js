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
  Base_Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Base Unit of Measure',
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
  Description_2: {
    type: Sequelize.STRING(50),
    field: 'Description 2',
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
    field: '"Unit Cost (LCY)"',
    allowNull: false
  },
  VAT_Perc: {
    type: Sequelize.DECIMAL,
    field: 'VAT %',
    allowNull: false
  },
  Line_Discount_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Line Discount %',
    allowNull: false
  },
  Unit_Price_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Unit Price (LCY)"',
    allowNull: false
  },
  Allow_Invoice_Disc: {
    type: Sequelize.INTEGER,
    field: 'Allow Invoice Disc_',
    allowNull: false
  },
  Gross_Weight: {
    type: Sequelize.DECIMAL,
    field: 'Gross Weight',
    allowNull: false
  },
  Net_Weight: {
    type: Sequelize.DECIMAL,
    field: 'Net Weight',
    allowNull: false
  },
  Units_Per_Parcel: {
    type: Sequelize.DECIMAL,
    field: 'Units per Parcel',
    allowNull: false
  },
  Indirect_Cost_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Indirect Cost %',
    allowNull: false
  },
  Unit_Volume: {
    type: Sequelize.DECIMAL,
    field: 'Unit Volume',
    allowNull: false
  },
  Appl_To_Item_Entry: {
    type: Sequelize.INTEGER,
    field: 'Appl_-to Item Entry',
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
  Shortcut_Dimension_2_Code: {
    type: Sequelize.STRING(20),
    field: 'Shortcut Dimension 2 Code',
    allowNull: false
  },
  Job_No: {
    type: Sequelize.STRING(20),
    field: 'Job No_',
    allowNull: false
  },
  Indirect_Cost_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Indirect Cost %',
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
  Vendor_Item_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor Item No_',
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
  VAT_Calculation_Type: {
    type: Sequelize.INTEGER,
    field: 'VAT Calculation Type',
    allowNull: false
  },
  Transaction_Type: {
    type: Sequelize.STRING(10),
    field: 'Transaction Type',
    allowNull: false
  },
  Transport_Method: {
    type: Sequelize.STRING(10),
    field: 'Transport Method',
    allowNull: false
  },
  Attached_To_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Attached to Line No_',
    allowNull: false
  },
  Entry_Point: {
    type: Sequelize.STRING(10),
    field: 'Entry Point',
    allowNull: false
  },
  Area: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Transaction_Specification: {
    type: Sequelize.STRING(10),
    field: 'Transaction Specification',
    allowNull: false
  },
  Tax_Area_Code: {
    type: Sequelize.STRING(20),
    field: 'Tax Area Code',
    allowNull: false
  },
  Tax_Liable: {
    type: Sequelize.INTEGER,
    field: 'Tax Liable',
    allowNull: false
  },
  Tax_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Tax Group Code',
    allowNull: false
  },
  Use_Tax: {
    type: Sequelize.INTEGER,
    field: 'Use Tax',
    allowNull: false
  },
  VAT_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'VAT Bus_ Posting Group',
    allowNull: false
  },
  VAT_Prod_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'VAT Prod_ Posting Group',
    allowNull: false
  },
  Blanket_Order_No: {
    type: Sequelize.STRING(20),
    field: 'Blanket Order No_',
    allowNull: false
  },
  Blanket_Order_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Blanket Order Line No_',
    allowNull: false
  },
  Budget_Profit: {
    type: Sequelize.DECIMAL,
    field: 'Budget Profit',
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
  Prod_Order_No: {
    type: Sequelize.STRING(20),
    field: 'Prod_ Order No_',
    allowNull: false
  },
  Variant_Code: {
    type: Sequelize.STRING(10),
    field: 'Variant Code',
    allowNull: false
  },
  Bin_Code: {
    type: Sequelize.STRING(10),
    field: 'Bin Code',
    allowNull: false
  },
  Qty_Per_Unit_Of_Measure: {
    type: Sequelize.DECIMAL,
    field: 'Qty_ per Unit of Measure',
    allowNull: false
  },
  Unit_Of_Measure_Code: {
    type: Sequelize.STRING(10),
    field: 'Unit of Measure Code',
    allowNull: false
  },
  Quantity_Base: {
    type: Sequelize.DECIMAL,
    field: '"Quantity (Base)"',
    allowNull: false
  },
  Qty_Invoiced_Base: {
    type: Sequelize.DECIMAL,
    field: '"Qty_ Invoiced (Base)"',
    allowNull: false
  },
  FA_Posting_Date: {
    type: Sequelize.DATE,
    field: 'FA Posting Date',
    allowNull: false
  },
  FA_Posting_Type: {
    type: Sequelize.INTEGER,
    field: 'FA Posting Date',
    allowNull: false
  },
  Depreciation_Book_Code: {
    type: Sequelize.STRING(10),
    field: 'Depreciation Book Code',
    allowNull: false
  },
  Salvage_Value: {
    type: Sequelize.DECIMAL,
    field: 'Salvage Value',
    allowNull: false
  },
  Depr_Until_FA_Posting_Date: {
    type: Sequelize.INTEGER,
    field: 'Depr_ until FA Posting Date',
    allowNull: false
  },
  Maintenance_Code: {
    type: Sequelize.STRING(10),
    field: 'Maintenance Code',
    allowNull: false
  },
  Insurance_No: {
    type: Sequelize.STRING(20),
    field: 'Insurance No_',
    allowNull: false
  },
  Budgeted_FA_No: {
    type: Sequelize.STRING(20),
    field: 'Budgeted FA No_',
    allowNull: false
  },
  Duplicate_In_Depreciation_Book: {
    type: Sequelize.STRING(10),
    field: 'Duplicate in Depreciation Book',
    allowNull: false
  },
  Use_Duplication_List: {
    type: Sequelize.INTEGER,
    field: 'Use Duplication List',
    allowNull: false
  },
  Responsibility_Center: {
    type: Sequelize.STRING(10),
    field: 'Responsibility Center',
    allowNull: false
  },
  Cross_Reference_No: {
    type: Sequelize.STRING(20),
    field: 'Cross-Reference No_',
    allowNull: false
  },
  Unit_Of_Measure_Cross_Ref: {
    type: Sequelize.STRING(10),
    field: '"Unit of Measure (Cross Ref_)"',
    allowNull: false
  },
  Cross_Reference_Type: {
    type: Sequelize.INTEGER,
    field: 'Cross-Reference Type',
    allowNull: false
  },
  Cross_Reference_Type_No: {
    type: Sequelize.STRING(30),
    field: 'Cross-Reference Type No_',
    allowNull: false
  },
  Item_Category_Code: {
    type: Sequelize.STRING(10),
    field: 'Item Category Code',
    allowNull: false
  },
  Nonstock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Purchasing_Code: {
    type: Sequelize.STRING(10),
    field: 'Purchasing Code',
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
  Correction: {
    type: Sequelize.INTEGER,
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
  },
  Return_Reason_Code: {
    type: Sequelize.STRING(10),
    field: 'Return Reason Code',
    allowNull: false
  },
  Targetted_Discounts: {
    type: Sequelize.INTEGER,
    field: 'Targetted Discounts',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Return Shipment Line',
  timestamps: false,
  freezeTableName: true,
});

module.exports = returnShipmentLineModel;
