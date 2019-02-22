const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const vendorLedgEntryModel = sequelize.define('Vendor_Ledger_Entry', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Entry_No: {
    type:Sequelize.INTEGER,
    field: 'Entry No_',
    primaryKey: true,
    allowNull: false
  },
  Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor No_',
    allowNull: false
  },
  Posting_Date: {
    type: Sequelize.DATEONLY,
    field: 'Posting Date',
    allowNull: false
  },
  Document_Type: {
    type: Sequelize.INTEGER,
    field: 'Document Type',
    allowNull: false
  },
  Document_No: {
    type: Sequelize.STRING(20),
    field: 'Document No_',
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Purchase_LCY: {
    type: Sequelize.DECIMAL,
    field: "'Purchase (LCY)'",
    allowNull: false
  },
  Inv_Discount_LCY: {
    type: Sequelize.DECIMAL,
    field: "'Inv_ Discount (LCY)'",
    allowNull: false
  },
  Buy_From_Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Buy-from Vendor No_',
    allowNull: false
  },
  Vendor_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Vendor Posting Group',
    allowNull: false
  },
  User_ID: {
    type: Sequelize.STRING(20),
    field: 'User ID',
    allowNull: false
  },
  Open: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Due_Date: {
    type: Sequelize.DATEONLY,
    field: 'Due Date',
    allowNull: false
  },
  Pmt_Discount_Date: {
    type: Sequelize.DATEONLY,
    field: 'Pmt_ Discount Date',
    allowNull: false
  },
  Original_Pmt_Disc_Possible: {
    type: Sequelize.DECIMAL,
    field: 'Original Pmt_ Disc_ Possible',
    allowNull: false
  },
  Pmt_Disc_Rcd_LCY: {
    type: Sequelize.DECIMAL,
    field: "'Pmt_ Disc_ Rcd_(LCY)'",
    allowNull: false
  },
  Closed_At_Date: {
    type: Sequelize.DATEONLY,
    field: 'Closed at Date',
    allowNull: false
  },
  Closed_By_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Closed by Amount',
    allowNull: false
  },
  Bal_Account_No: {
    type: Sequelize.STRING(20),
    field: 'Bal_ Account No_',
    allowNull: false
  },
  Transaction_No: {
    type: Sequelize.INTEGER,
    field: 'Transaction No_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Vendor Ledger Entry',
  timestamps: false,
  freezeTableName: true,
});

module.exports = vendorLedgEntryModel;
