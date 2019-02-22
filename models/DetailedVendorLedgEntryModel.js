const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const detailedVendorLedgEntryModel = sequelize.define('Detailed_Vendor_Ledg_Entry', {
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
  Vendor_Ledger_Entry_No: {
    type: Sequelize.INTEGER,
    field: 'Vendor Ledger Entry No_',
    allowNull: false
  },
  Entry_Type: {
    type: Sequelize.INTEGER,
    field: 'Entry Type',
    allowNull: false
  },
  Posting_Date: {
    type: Sequelize.DATE,
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
  Amount: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Amount_LCY: {
    type: Sequelize.DECIMAL,
    field: "[Amount (LCY)]",
    allowNull: false
  },
  Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor No_',
    allowNull: false
  },
  User_ID: {
    type: Sequelize.STRING(20),
    field: 'User ID',
    allowNull: false
  },
  Transaction_No: {
    type: Sequelize.INTEGER,
    field: 'Transaction No_',
    allowNull: false
  },
  Debit_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Debit Amount',
    allowNull: false
  },
  Credit_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Credit Amount',
    allowNull: false
  },
  Debit_Amount_LCY: {
    type: Sequelize.INTEGER,
    field: "[Debit Amount (LCY)]",
    allowNull: false
  },
  Credit_Amount_LCY: {
    type: Sequelize.INTEGER,
    field: "[Credit Amount (LCY)]",
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Detailed Vendor Ledg_ Entry',
  timestamps: false,
  freezeTableName: true,
});

module.exports = detailedVendorLedgEntryModel;
