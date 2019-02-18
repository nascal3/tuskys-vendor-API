const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const vendorLedgEntryModel = require('./VendorLedgEntryModel');
const itemModel = require('./ItemModel');
const config = require('config');

const vendorModel = sequelize.define('vendor', {
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
  Payment_Term_Code: {
    type: Sequelize.STRING(10),
    field: 'Payment Terms Code',
    allowNull: false
  },
  Shipment_Method_Code: {
    type: Sequelize.STRING(10),
    field: 'Shipment Method Code',
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
  Fax_No: {
    type: Sequelize.STRING(30),
    field: 'Fax No_',
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

vendorLedgEntryModel.hasMany(vendorModel, {
  foreignKey: 'No',
  sourceKey: 'Vendor_No'
});
vendorModel.belongsTo(vendorLedgEntryModel, {
  foreignKey: 'No',
  targetKey: 'Vendor_No'
});

itemModel.hasMany(vendorModel, {
  foreignKey: 'No',
  sourceKey: 'Vendor_No'
});

vendorModel.belongsTo(itemModel, {
  foreignKey: 'No',
  as: 'Stock_Items',
  targetKey: 'Vendor_No'
});


module.exports = vendorModel;
