const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const vendorLedgEntryModel = sequelize.define('Vendor_Ledg_Entry', {
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
  Amount: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Amount_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Amount (LCY)"',
    allowNull: false
  },
  Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor No_',
    allowNull: false
  },
  Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Currency Code',
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
  Transaction_No: {
    type: Sequelize.INTEGER,
    field: 'Transaction No_',
    allowNull: false
  },
  Journal_Batch_Name: {
    type: Sequelize.STRING(10),
    field: 'Journal Batch Name',
    allowNull: false
  },
  Reason_Code: {
    type: Sequelize.STRING(10),
    field: 'Reason Code',
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
    type: Sequelize.DECIMAL,
    field: '"Debit Amount (LCY)"',
    allowNull: false
  },
  Credit_Amount_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Credit Amount (LCY)"',
    allowNull: false
  },
  Initial_Entry_Due_Date: {
    type: Sequelize.DATEONLY,
    field: 'Initial Entry Due Date',
    allowNull: false
  },
  Initial_Entry_Global_Dim_1: {
    type: Sequelize.STRING(20),
    field: 'Initial Entry Global Dim_ 1',
    allowNull: false
  },
  Initial_Entry_Global_Dim_2: {
    type: Sequelize.STRING(20),
    field: 'Initial Entry Global Dim_ 2',
    allowNull: false
  },
  Gen_Bus_Posting_Group: {
    type: Sequelize.STRING(20),
    field: 'Gen_ Bus_ Posting Group',
    allowNull: false
  },
  Gen_Prod_Posting_Group: {
    type: Sequelize.STRING(20),
    field: 'Gen_ Prod_ Posting Group',
    allowNull: false
  },
  Use_Tax: {
    type: Sequelize.BOOLEAN,
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
  Initial_Document_Type: {
    type: Sequelize.INTEGER,
    field: 'Initial Document Type',
    allowNull: false
  },
  Applied_Vend_Ledger_Entry_No: {
    type: Sequelize.INTEGER,
    field: 'Applied Vend_ Ledger Entry No_',
    allowNull: false
  },
  Unapplied: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  Unapplied_by_Entry_No: {
    type: Sequelize.BOOLEAN,
    field: 'Unapplied by Entry No_',
    allowNull: false
  },
  Remaining_Pmt_Disc_Possible: {
    type: Sequelize.DECIMAL,
    field: 'Remaining Pmt_ Disc_ Possible',
    allowNull: false
  },
  Max_Payment_Tolerance: {
    type: Sequelize.DECIMAL,
    field: 'Max_ Payment Tolerance',
    allowNull: false
  },
  Tax_Jurisdiction_Code: {
    type: Sequelize.STRING(10),
    field: 'Tax Jurisdiction Code',
    allowNull: false
  },
  WHT: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Detailed Vendor Ledg_ Entry',
  timestamps: false,
  freezeTableName: true,
});

module.exports = vendorLedgEntryModel;
