const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const returnShipmentHeaderModel = sequelize.define('Return_Shipment_Header', {
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
  Buy_From_Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Buy-from Vendor No_',
    allowNull: false
  },
  Pay_To_Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Pay-to Vendor No_',
    allowNull: false
  },
  Pay_To_Name: {
    type: Sequelize.STRING(50),
    field: 'Pay-to Name',
    allowNull: false
  },
  Pay_To_Name_2: {
    type: Sequelize.STRING(50),
    field: 'Pay-to Name 2',
    allowNull: false
  },
  Pay_To_Address: {
    type: Sequelize.STRING(50),
    field: 'Pay-to Address',
    allowNull: false
  },
  Pay_To_Address_2: {
    type: Sequelize.STRING(50),
    field: 'Pay-to Address 2',
    allowNull: false
  },
  Pay_To_Contact: {
    type: Sequelize.STRING(50),
    field: 'Pay-to Contact',
    allowNull: false
  },
  Your_Reference: {
    type: Sequelize.STRING(30),
    field: 'Your Reference',
    allowNull: false
  },
  Ship_To_Code: {
    type: Sequelize.STRING(10),
    field: 'Ship-to Code',
    allowNull: false
  },
  Ship_To_Name: {
    type: Sequelize.STRING(50),
    field: 'Ship-to Name',
    allowNull: false
  },
  Ship_To_Name_2: {
    type: Sequelize.STRING(50),
    field: 'Ship-to Name 2',
    allowNull: false
  },
  Ship_To_Address: {
    type: Sequelize.STRING(50),
    field: 'Ship-to Address',
    allowNull: false
  },
  Ship_To_Address_2: {
    type: Sequelize.STRING(50),
    field: 'Ship-to Address 2',
    allowNull: false
  },
  Ship_To_City: {
    type: Sequelize.STRING(30),
    field: 'Ship-to City',
    allowNull: false
  },
  Ship_To_Contact: {
    type: Sequelize.STRING(50),
    field: 'Ship-to Contact',
    allowNull: false
  },
  Posting_Date: {
    type: Sequelize.DATE,
    field: 'Posting Date',
    allowNull: false
  },
  Expected_Receipt_Date: {
    type: Sequelize.DATE,
    field: 'Expected Receipt Date',
    allowNull: false
  },
  Posting_Description: {
    type: Sequelize.STRING(50),
    field: 'Posting Description',
    allowNull: false
  },
  Payment_Terms_Code: {
    type: Sequelize.STRING(10),
    field: 'Payment Terms Code',
    allowNull: false
  },
  Due_Date: {
    type: Sequelize.DATE,
    field: 'Due Date',
    allowNull: false
  },
  Payment_Discount_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Payment Discount %',
    allowNull: false
  },
  Pmt_Discount_Date: {
    type: Sequelize.DATE,
    field: 'Pmt_ Discount Date',
    allowNull: false
  },
  Shipment_Method_Code: {
    type: Sequelize.STRING(10),
    field: 'Shipment Method Code',
    allowNull: false
  },
  Location_Code: {
    type: Sequelize.STRING(10),
    field: 'Location Code',
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
  Vendor_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Vendor Posting Group',
    allowNull: false
  },
  Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Currency Code',
    allowNull: false
  },
  Currency_Factor: {
    type: Sequelize.DECIMAL,
    field: 'Currency Factor',
    allowNull: false
  },
  Invoice_Disc_Code: {
    type: Sequelize.STRING(20),
    field: 'Invoice Disc_ Code',
    allowNull: false
  },
  Language_Code: {
    type: Sequelize.STRING(10),
    field: 'Language Code',
    allowNull: false
  },
  Purchaser_Code: {
    type: Sequelize.STRING(10),
    field: 'Purchaser Code',
    allowNull: false
  },
  No_Printed: {
    type: Sequelize.INTEGER,
    field: 'No_ Printed',
    allowNull: false
  },
  On_Hold: {
    type: Sequelize.STRING(3),
    field: 'On Hold',
    allowNull: false
  },
  Applies_To_Doc_Type: {
    type: Sequelize.INTEGER,
    field: 'Applies-to Doc_ Type',
    allowNull: false
  },
  Applies_To_Doc_No: {
    type: Sequelize.STRING(20),
    field: 'Applies-to Doc_ No_',
    allowNull: false
  },
  Bal_Account_No: {
    type: Sequelize.STRING(20),
    field: 'Bal_ Account No_',
    allowNull: false
  },
  VAT_Registration_No: {
    type: Sequelize.STRING(20),
    field: 'VAT Registration No_',
    allowNull: false
  },
  Gen_Prod_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Gen_ Prod_ Posting Group',
    allowNull: false
  },
  Sell_To_Customer_No: {
    type: Sequelize.STRING(20),
    field: 'Sell-to Customer No_',
    allowNull: false
  },
  Reason_Code: {
    type: Sequelize.STRING(10),
    field: 'Reason Code',
    allowNull: false
  },
  Gen_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Gen_ Bus_ Posting Group',
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
  VAT_Country_Region_Code: {
    type: Sequelize.STRING(10),
    field: 'VAT Country_Region Code',
    allowNull: false
  },
  Buy_From_Vendor_Name: {
    type: Sequelize.STRING(50),
    field: 'Buy-from Vendor Name',
    allowNull: false
  },
  Buy_From_Vendor_Name_2: {
    type: Sequelize.STRING(50),
    field: 'Buy-from Vendor Name 2',
    allowNull: false
  },
  Buy_From_Address: {
    type: Sequelize.STRING(50),
    field: 'Buy-from Address',
    allowNull: false
  },
  Buy_From_Address_2: {
    type: Sequelize.STRING(50),
    field: 'Buy-from Address 2',
    allowNull: false
  },
  Buy_From_City: {
    type: Sequelize.STRING(30),
    field: 'Buy-from City',
    allowNull: false
  },
  Buy_From_Contact: {
    type: Sequelize.STRING(50),
    field: 'Buy-from Contact',
    allowNull: false
  },
  Pay_To_Post_Code: {
    type: Sequelize.STRING(20),
    field: 'Pay-to Post Code',
    allowNull: false
  },
  Pay_To_Post_County: {
    type: Sequelize.STRING(20),
    field: 'Pay-to County',
    allowNull: false
  },
  Pay_To_Country_Region_Code: {
    type: Sequelize.STRING(10),
    field: 'Pay-to Country_Region Code',
    allowNull: false
  },
  Buy_From_Post_Code: {
    type: Sequelize.STRING(20),
    field: 'Buy-from Post Code',
    allowNull: false
  },
  Buy_From_County: {
    type: Sequelize.STRING(30),
    field: 'Buy-from County',
    allowNull: false
  },
  Buy_From_County_Region_Code: {
    type: Sequelize.STRING(10),
    field: 'Buy-from Country_Region Code',
    allowNull: false
  },
  Ship_To_Post_Code: {
    type: Sequelize.STRING(20),
    field: 'Ship-to Post Code',
    allowNull: false
  },
  Ship_To_County: {
    type: Sequelize.STRING(30),
    field: 'Ship-to County',
    allowNull: false
  },
  Ship_To_County_Region_Code: {
    type: Sequelize.STRING(10),
    field: 'Ship-to Country_Region Code',
    allowNull: false
  },
  Bal_Account_Type: {
    type: Sequelize.INTEGER,
    field: 'Bal_ Account Type',
    allowNull: false
  },
  Order_Address_Code: {
    type: Sequelize.STRING(10),
    field: 'Order Address Code',
    allowNull: false
  },
  Entry_Point: {
    type: Sequelize.STRING(10),
    field: 'Entry Point',
    allowNull: false
  },
  Correction: {
    type: Sequelize.INTEGER,
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
  Payment_Method_Code: {
    type: Sequelize.STRING(10),
    field: 'Payment Method Code',
    allowNull: false
  },
  No_Series: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  User_ID: {
    type: Sequelize.STRING(20),
    field: 'User ID',
    allowNull: false
  },
  Source_Code: {
    type: Sequelize.STRING(10),
    field: 'Source Code',
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
  VAT_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'VAT Bus_ Posting Group',
    allowNull: false
  },
  VAT_Base_Discount_Perc: {
    type: Sequelize.DECIMAL,
    field: 'VAT Base Discount %',
    allowNull: false
  },
  Campaign_No: {
    type: Sequelize.STRING(20),
    field: 'Campaign No_',
    allowNull: false
  },
  Buy_from_Contact_No: {
    type: Sequelize.STRING(20),
    field: 'Buy-from Contact No_',
    allowNull: false
  },
  Pay_to_Contact_No: {
    type: Sequelize.STRING(20),
    field: 'Pay-to Contact No_',
    allowNull: false
  },
  Responsibility_Center: {
    type: Sequelize.STRING(10),
    field: 'Responsibility Center',
    allowNull: false
  },
  Vendor_Authorization_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor Authorization No_',
    allowNull: false
  },
  Return_Order_No: {
    type: Sequelize.STRING(20),
    field: 'Return Order No_',
    allowNull: false
  },
  Return_Order_No_Series: {
    type: Sequelize.STRING(20),
    field: 'Return Order No_ Series',
    allowNull: false
  },
  Store_No: {
    type: Sequelize.STRING(10),
    field: 'Store No_',
    allowNull: false
  },
  Retail_Status: {
    type: Sequelize.INTEGER,
    field: 'Retail Status',
    allowNull: false
  },
  Reciving_Picking_No: {
    type: Sequelize.STRING(20),
    field: 'Reciving_Picking No_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Return Shipment Header',
  timestamps: false,
  freezeTableName: true,
});

module.exports = returnShipmentHeaderModel;
