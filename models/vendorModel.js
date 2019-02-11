const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const VendorModel = sequelize.define('vendor', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  No: {
    type:Sequelize.INTEGER,
    field: 'No_',
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Search_Name: {
    type: Sequelize.STRING(50),
    field: 'Search Name',
    allowNull: false
  },
  Name_2: {
    type: Sequelize.STRING(50),
    field: 'Name 2',
    allowNull: false
  },
  Address: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Address_2: {
    type: Sequelize.STRING(50),
    field: 'Address 2',
    allowNull: false
  },
  City: {
    type: Sequelize.STRING(30),
    field: 'City',
    allowNull: false
  },
  Contact: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Phone_No: {
    type: Sequelize.STRING(30),
    field: 'Phone No_',
    allowNull: false
  },
  Telex_No: {
    type: Sequelize.STRING(50),
    field: 'Telex No_',
    allowNull: false
  },
  Our_Account_No: {
    type: Sequelize.STRING(20),
    field: 'Our Account No_',
    allowNull: false
  },
  Territory_Code: {
    type: Sequelize.STRING(10),
    field: 'Territory Code',
    allowNull: false
  },
  Global_Dimension_1_Code: {
    type: Sequelize.STRING(20),
    field: 'Global Dimension 1 Code',
    allowNull: false
  },
  Global_Dimension_2_Code: {
    type: Sequelize.STRING(20),
    field: 'Global Dimension 2 Code',
    allowNull: false
  },
  Budgeted_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Budgeted Amount',
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
  Language_Code: {
    type: Sequelize.STRING(10),
    field: 'Language Code',
    allowNull: false
  },
  Statistics_Group: {
    type: Sequelize.INTEGER,
    field: 'Statistics Group',
    allowNull: false
  },
  Payment_Term_Code: {
    type: Sequelize.STRING(10),
    field: 'Payment Terms Code',
    allowNull: false
  },
  Fin_Charge_Terms_Code: {
    type: Sequelize.STRING(10),
    field: 'Fin_ Charge Terms Code',
    allowNull: false
  },
  Purchaser_Code: {
    type: Sequelize.STRING(10),
    field: 'Purchaser Code',
    allowNull: false
  },
  Shipment_Method_Code: {
    type: Sequelize.STRING(10),
    field: 'Shipment Method Code',
    allowNull: false
  },
  Shipping_Agent_Code: {
    type: Sequelize.STRING(10),
    field: 'Shipping Agent Code',
    allowNull: false
  },
  Invoice_Disc_Code: {
    type: Sequelize.STRING(20),
    field: 'Invoice Disc_ Code',
    allowNull: false
  },
  Country_Region_Code: {
    type: Sequelize.STRING(10),
    field: 'Country_Region Code',
    allowNull: false
  },
  Blocked: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Pay_to_Vendor_No_: {
    type: Sequelize.BOOLEAN,
    field: 'Pay-to Vendor No_',
    allowNull: false
  },
  Priority: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Payment_Method_Code: {
    type: Sequelize.STRING(10),
    field: 'Payment Method Code',
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATEONLY,
    field: 'Last Date Modified',
    allowNull: false
  },
  Application_Method: {
    type: Sequelize.INTEGER,
    field: 'Application Method',
    allowNull: false
  },
  Prices_Including_VAT: {
    type: Sequelize.BOOLEAN,
    field: 'Prices Including VAT',
    allowNull: false
  },
  Fax_No: {
    type: Sequelize.STRING(30),
    field: 'Fax No_',
    allowNull: false
  },
  Telex_Answer_Back: {
    type: Sequelize.STRING(20),
    field: 'Telex Answer Back',
    allowNull: false
  },
  VAT_Registration_No: {
    type: Sequelize.STRING(20),
    field: 'VAT Registration No_',
    allowNull: false
  },
  Gen_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Gen_ Bus_ Posting Group',
    allowNull: false
  },
  Picture: {
    type:Sequelize.BLOB,
    allowNull: true
  },
  Post_Code: {
    type: Sequelize.STRING(20),
    field: 'Post Code',
    allowNull: false
  },
  County: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  E_Mail: {
    type: Sequelize.STRING(80),
    field: 'E-Mail',
    allowNull: false
  },
  Home_Page: {
    type: Sequelize.STRING(80),
    field: 'Home Page',
    allowNull: false
  },
  No_Series: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  Tax_Area_Code: {
    type: Sequelize.STRING(20),
    field: 'Tax Area Code',
    allowNull: false
  },
  Tax_Liable: {
    type: Sequelize.BOOLEAN,
    field: 'Tax Liable',
    allowNull: false
  },
  VAT_Bus_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'VAT Bus_ Posting Group',
    allowNull: false
  },
  Block_Payment_Tolerance: {
    type: Sequelize.BOOLEAN,
    field: 'Block Payment Tolerance',
    allowNull: false
  },
  IC_Partner_Code: {
    type: Sequelize.STRING(20),
    field: 'IC Partner Code',
    allowNull: false
  },
  Prepayment_percent: {
    type: Sequelize.DECIMAL,
    field: 'Prepayment %',
    allowNull: false
  },
  Primary_Contact_No: {
    type: Sequelize.STRING(20),
    field: 'Primary Contact No_',
    allowNull: false
  },
  Responsibility_Center: {
    type: Sequelize.STRING(10),
    field: 'Responsibility Center',
    allowNull: false
  },
  Location_Code: {
    type: Sequelize.STRING(10),
    field: 'Location Code',
    allowNull: false
  },
  Lead_Time_Calculation: {
    type: Sequelize.STRING(32),
    field: 'Lead Time Calculation',
    allowNull: false
  },
  Last_Statement_No: {
    type: Sequelize.INTEGER,
    field: 'Last Statement No_',
    allowNull: false
  },
  Print_Statements: {
    type: Sequelize.BOOLEAN,
    field: 'Print Statements',
    allowNull: false
  },
  DIT_No: {
    type: Sequelize.STRING(20),
    field: 'DIT No_',
    allowNull: false
  },
  DOHS: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  Responsible_Employee: {
    type: Sequelize.STRING(20),
    field: 'Responsible Employee',
    allowNull: false
  },
  Name_on_Cheque: {
    type: Sequelize.STRING(20),
    field: 'Name on Cheque',
    allowNull: false
  },
  Supply_to_Vendor: {
    type: Sequelize.STRING(30),
    field: 'Supply to Vendor',
    allowNull: false
  },
  RTC_Filter_Field: {
    type: Sequelize.INTEGER,
    field: 'RTC Filter Field',
    allowNull: false
  },
  Buyer_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Buyer Group Code',
    allowNull: false
  },
  Buyer_ID: {
    type: Sequelize.STRING(20),
    field: 'Buyer ID',
    allowNull: false
  },
  Liq_Payment_Terms_Code: {
    type: Sequelize.STRING(10),
    field: 'Liq_ Payment Terms Code',
    allowNull: false
  },
  Quote_Validity_Period: {
    type: Sequelize.STRING(32),
    field: 'Quote Validity Period',
    allowNull: false
  },
  Medical_Practitioner: {
    type: Sequelize.BOOLEAN,
    field: 'Medical Practitioner',
    allowNull: false
  },
  Training_Service_Provider: {
    type: Sequelize.BOOLEAN,
    field: 'Training Service Provider',
    allowNull: false
  },
  Active_Contract_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Active Contract Amount',
    allowNull: false
  },
  Pin_No: {
    type: Sequelize.STRING(15),
    field: 'Pin No_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Vendor',
  timestamps: false,
  freezeTableName: true,
});

module.exports = VendorModel;
