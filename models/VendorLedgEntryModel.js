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
  Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Currency Code',
    allowNull: false
  },
  Purchase_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Purchase (LCY)"',
    allowNull: false
  },
  Inv_Discount_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Inv_ Discount (LCY)"',
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
  Purchaser_Code: {
    type: Sequelize.STRING(10),
    field: 'Purchaser Code',
    allowNull: false
  },
  User_ID: {
    type: Sequelize.STRING(20),
    field: 'User ID',
    allowNull: false
  },
  Source_Code: {
    type: Sequelize.STRING,
    field: 'Source Code',
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
    field: '"Pmt_ Disc_ Rcd_(LCY)"',
    allowNull: false
  },
  Positive: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Closed_by_Entry_No: {
    type: Sequelize.INTEGER,
    field: 'Closed by Entry No_',
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
  Applies_To_ID: {
    type: Sequelize.STRING(20),
    field: 'Applies-to ID',
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
  Bal_Account_Type: {
    type: Sequelize.INTEGER,
    field: 'Bal_ Account Type',
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
  },
  Closed_By_Amount_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Closed by Amount (LCY)"',
    allowNull: false
  },
  Document_Date: {
    type: Sequelize.DATEONLY,
    field: 'Document Date',
    allowNull: false
  },
  External_Document_No: {
    type: Sequelize.STRING(20),
    field: 'External Document No_',
    allowNull: false
  },
  No_Series: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  Closed_by_Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Closed by Currency Code',
    allowNull: false
  },
  Closed_by_Currency_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Closed by Currency Amount',
    allowNull: false
  },
  Adjusted_Currency_Factor: {
    type: Sequelize.DECIMAL,
    field: 'Adjusted Currency Factor',
    allowNull: false
  },
  Original_Currency_Factor: {
    type: Sequelize.DECIMAL,
    field: 'Original Currency Factor',
    allowNull: false
  },
  Remaining_Pmt_Disc_Possible: {
    type: Sequelize.DECIMAL,
    field: 'Remaining Pmt_ Disc_ Possible',
    allowNull: false
  },
  Pmt_Disc_Tolerance_Date: {
    type: Sequelize.DATEONLY,
    field: 'Pmt_ Disc_ Tolerance Date',
    allowNull: false
  },
  Max_Payment_Tolerance: {
    type: Sequelize.DECIMAL,
    field: 'Max_ Payment Tolerance',
    allowNull: false
  },
  Accepted_Payment_Tolerance: {
    type: Sequelize.DECIMAL,
    field: 'Accepted Payment Tolerance',
    allowNull: false
  },
  Accepted_Pmt_Disc_Tolerance: {
    type: Sequelize.INTEGER,
    field: 'Accepted Pmt_ Disc_ Tolerance',
    allowNull: false
  },
  Pmt_Tolerance_LCY: {
    type: Sequelize.DECIMAL,
    field: '"Pmt_ Tolerance (LCY)"',
    allowNull: false
  },
  Amount_To_Apply: {
    type: Sequelize.DECIMAL,
    field: 'Amount to Apply',
    allowNull: false
  },
  IC_Partner_Code: {
    type: Sequelize.STRING(20),
    field: 'IC Partner Code',
    allowNull: false
  },
  Applying_Entry: {
    type: Sequelize.INTEGER,
    field: 'Applying Entry',
    allowNull: false
  },
  Reversed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Reversed_By_Entry_No: {
    type: Sequelize.INTEGER,
    field: 'Reversed by Entry No_',
    allowNull: false
  },
  Reversed_Entry_No: {
    type: Sequelize.INTEGER,
    field: 'Reversed Entry No_',
    allowNull: false
  },
  Prepayment: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Payment_Type: {
    type: Sequelize.INTEGER,
    field: 'Payment Type',
    allowNull: false
  },
  WHT: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Sent_For_Approval: {
    type: Sequelize.INTEGER,
    field: 'Sent for Approval',
    allowNull: false
  },
  Approved: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Rejected: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Sent_By: {
    type: Sequelize.STRING(20),
    field: 'Sent By',
    allowNull: false
  },
  Approved_By: {
    type: Sequelize.STRING(20),
    field: 'Approved By',
    allowNull: false
  },
  Rejected_By: {
    type: Sequelize.STRING(20),
    field: 'Rejected By',
    allowNull: false
  },
  Sent_Q: {
    type: Sequelize.INTEGER,
    field: 'Sent?',
    allowNull: false
  },
  Approval_Entry: {
    type: Sequelize.STRING(30),
    field: 'Approval Entry',
    allowNull: false
  },
  Approve_Q: {
    type: Sequelize.INTEGER,
    field: 'Approve?',
    allowNull: false
  },
  Reject_Q: {
    type: Sequelize.INTEGER,
    field: 'Reject?',
    allowNull: false
  },
  Vendor_Name: {
    type: Sequelize.STRING(50),
    field: 'Vendor Name',
    allowNull: false
  },
  PIN_No: {
    type: Sequelize.STRING(20),
    field: 'PIN No_',
    allowNull: false
  },
  Withholding_VAT: {
    type: Sequelize.INTEGER,
    field: 'Withholding VAT',
    allowNull: false
  },
  VAT_Amount: {
    type: Sequelize.DECIMAL,
    field: 'VAT Amount',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Vendor Ledger Entry',
  timestamps: false,
  freezeTableName: true,
});

module.exports = vendorLedgEntryModel;
