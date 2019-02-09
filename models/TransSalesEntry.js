const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const TransSalesEntry = sequelize.define('TransSalesEntry', {
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
  Sales_Staff: {
    type: Sequelize.STRING(20),
    field: 'Sales Staff',
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
  Price_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Price Group Code',
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
  xTransaction_Status: {
    type: Sequelize.INTEGER,
    field: 'xTransaction Status',
    allowNull: false
  },
  Discount_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Discount Amount',
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
  Shift_No: {
    type: Sequelize.STRING(1),
    field: 'Shift No_',
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
  xStatement_No: {
    type: Sequelize.STRING(20),
    field: 'xStatement No_',
    allowNull: false
  },
  Customer_No: {
    type: Sequelize.STRING(20),
    field: 'Customer No_',
    allowNull: false
  },
  Section: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Shelf: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Statement_Code: {
    type: Sequelize.STRING(20),
    field: 'Statement Code',
    allowNull: false
  },
  Item_Disc_Group: {
    type: Sequelize.STRING(10),
    field: 'Item Disc_ Group',
    allowNull: false
  },
  Transaction_Code: {
    type: Sequelize.INTEGER,
    field: 'Transaction Code',
    allowNull: false
  },
  Item_Number_Scanned: {
    type: Sequelize.INTEGER,
    field: 'Item Number Scanned',
    allowNull: false
  },
  Keyboard_Item_Entry: {
    type: Sequelize.INTEGER,
    field: 'Keyboard Item Entry',
    allowNull: false
  },
  Price_in_Barcode: {
    type: Sequelize.INTEGER,
    field: 'Price in Barcode',
    allowNull: false
  },
  Price_Change: {
    type: Sequelize.INTEGER,
    field: 'Price Change',
    allowNull: false
  },
  Weight_Manually_Entered: {
    type: Sequelize.INTEGER,
    field: 'Weight Manually Entered',
    allowNull: false
  },
  Line_was_Discounted: {
    type: Sequelize.INTEGER,
    field: 'Line was Discounted',
    allowNull: false
  },
  Weight_Item: {
    type: Sequelize.INTEGER,
    field: 'Weight Item',
    allowNull: false
  },
  Return_No_Sale: {
    type: Sequelize.INTEGER,
    field: 'Return No Sale',
    allowNull: false
  },
  Item_Corrected_Line: {
    type: Sequelize.INTEGER,
    field: 'Item Corrected Line',
    allowNull: false
  },
  Orig_of_Linked_Item_List: {
    type: Sequelize.INTEGER,
    field: 'Orig_ of a Linked Item List',
    allowNull: false
  },
  Linked_No_not_Orig: {
    type: Sequelize.INTEGER,
    field: 'Linked No_ not Orig_',
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
  Counter: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Variant_Code: {
    type: Sequelize.STRING(10),
    field: 'Variant Code',
    allowNull: false
  },
  Serial_No: {
    type: Sequelize.STRING(20),
    field: 'Serial No_',
    allowNull: false
  },
  Serial_Lot_No_Not_Valid: {
    type: Sequelize.INTEGER,
    field: 'Serial_Lot No_ Not Valid',
    allowNull: false
  },
  Lot_No: {
    type: Sequelize.INTEGER,
    field: 'Lot No_',
    allowNull: false
  },
  Expiration_Date: {
    type: Sequelize.DATE,
    field: 'Expiration Date',
    allowNull: false
  },
  Line_Discount: {
    type: Sequelize.DECIMAL,
    field: 'Line Discount',
    allowNull: false
  },
  Replicated: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Customer_Discount: {
    type: Sequelize.DECIMAL,
    field: 'Customer Discount',
    allowNull: false
  },
  Infocode_Discount: {
    type: Sequelize.DECIMAL,
    field: 'Infocode Discount',
    allowNull: false
  },
  Cust_Invoice_Discount: {
    type: Sequelize.DECIMAL,
    field: 'Cust_ Invoice Discount',
    allowNull: false
  },
  Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Unit of Measure',
    allowNull: false
  },
  UOM_Quantity: {
    type: Sequelize.DECIMAL,
    field: 'UOM Quantity',
    allowNull: false
  },
  UOM_Price: {
    type: Sequelize.DECIMAL,
    field: 'UOM Price',
    allowNull: false
  },
  Total_Discount: {
    type: Sequelize.DECIMAL,
    field: 'Total Discount',
    allowNull: false
  },
  Total_Disc_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Total Disc_%',
    allowNull: false
  },
  Tot_Disc_Info_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Tot_ Disc Info Line No_',
    allowNull: false
  },
  Periodic_Disc_Type: {
    type: Sequelize.INTEGER,
    field: 'Periodic Disc_ Type',
    allowNull: false
  },
  Periodic_Disc_Group: {
    type: Sequelize.STRING(20),
    field: 'Periodic Disc_ Group',
    allowNull: false
  },
  Periodic_Discount: {
    type: Sequelize.DECIMAL,
    field: 'Periodic Discount',
    allowNull: false
  },
  Deal_Line: {
    type: Sequelize.INTEGER,
    field: 'Deal Line',
    allowNull: false
  },
  Discount_Amt_For_Printing: {
    type: Sequelize.DECIMAL,
    field: 'Discount Amt_ For Printing',
    allowNull: false
  },
  Replication_Counter: {
    type: Sequelize.INTEGER,
    field: 'Replication Counter',
    allowNull: false
  },
  Sales_Type: {
    type: Sequelize.STRING(20),
    field: 'Sales Type',
    allowNull: false
  },
  Orig_Trans_Store: {
    type: Sequelize.STRING(10),
    field: 'Orig Trans Store',
    allowNull: false
  },
  Orig_Trans_Pos: {
    type: Sequelize.STRING(10),
    field: 'Orig Trans Pos',
    allowNull: false
  },
  Orig_Trans_No: {
    type: Sequelize.INTEGER,
    field: 'Orig Trans No_',
    allowNull: false
  },
  Orig_Trans_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Orig Trans Line No_',
    allowNull: false
  },
  Refund_Qty: {
    type: Sequelize.DECIMAL,
    field: 'Refund Qty_',
    allowNull: false
  },
  Refunded_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Refunded Line No_',
    allowNull: false
  },
  Refunded_Trans_No: {
    type: Sequelize.INTEGER,
    field: 'Refunded Trans_ No_',
    allowNull: false
  },
  Refunded_POS_No: {
    type: Sequelize.STRING(20),
    field: 'Refunded POS No_',
    allowNull: false
  },
  Refunded_Store_No: {
    type: Sequelize.STRING(20),
    field: 'Refunded Store No_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Trans_ Sales Entry',
  timestamps: false,
  freezeTableName: true,
});

module.exports = TransSalesEntry;
