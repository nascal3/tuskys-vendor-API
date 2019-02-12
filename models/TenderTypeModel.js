const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const tenderTypeModel = sequelize.define('Tender_Type', {
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
  Code: {
    type:Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Function: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  No_In_Transaction: {
    type:Sequelize.STRING(10),
    field: 'No_ in Transaction',
    allowNull: false
  },
  Change_Tend_Code: {
    type:Sequelize.STRING(10),
    field: 'Change Tend_ Code',
    allowNull: false
  },
  Above_Min_Change_Tender_Type: {
    type:Sequelize.STRING(10),
    field: 'Above Min_ Change Tender Type',
    allowNull: false
  },
  Min_Change: {
    type:Sequelize.DECIMAL,
    field: 'Min_ Change',
    allowNull: false
  },
  Rounding: {
    type:Sequelize.INTEGER,
    allowNull: false
  },
  Rounding_To: {
    type:Sequelize.DECIMAL,
    field: 'Rounding To',
    allowNull: false
  },
  Min_Amount_Entered: {
    type:Sequelize.DECIMAL,
    field: 'Min_ Amount Entered',
    allowNull: false
  },
  Max_Amount_Entered: {
    type:Sequelize.DECIMAL,
    field: 'Max_ Amount Entered',
    allowNull: false
  },
  Min_Amount_Allowed: {
    type:Sequelize.DECIMAL,
    field: 'Min_ Amount Allowed',
    allowNull: false
  },
  Max_Amount_Allowed: {
    type:Sequelize.DECIMAL,
    field: 'Max_ Amount Allowed',
    allowNull: false
  },
  May_Be_Used: {
    type:Sequelize.INTEGER,
    field: 'May Be Used',
    allowNull: false
  },
  Manager_Key_Control: {
    type:Sequelize.INTEGER,
    field: 'Manager Key Control',
    allowNull: false
  },
  Keyboard_Entry_Allowed: {
    type:Sequelize.INTEGER,
    field: 'Keyboard Entry Allowed',
    allowNull: false
  },
  OverTender_Allowed: {
    type:Sequelize.INTEGER,
    field: 'Overtender Allowed',
    allowNull: false
  },
  OverTender_Max_Amt: {
    type:Sequelize.DECIMAL,
    field: 'Overtender Max_ Amt_',
    allowNull: false
  },
  UnderTender_Allowed: {
    type:Sequelize.INTEGER,
    field: 'Undertender Allowed',
    allowNull: false
  },
  Return_Minus_Allowed: {
    type:Sequelize.INTEGER,
    field: 'Return_Minus Allowed',
    allowNull: false
  },
  Drawer_Opens: {
    type:Sequelize.INTEGER,
    field: 'Drawer Opens',
    allowNull: false
  },
  Endorse_Check: {
    type:Sequelize.INTEGER,
    field: 'Endorse Check',
    allowNull: false
  },
  Card_Account_No: {
    type:Sequelize.INTEGER,
    field: 'Card_Account No_',
    allowNull: false
  },
  Ask_For_Date: {
    type:Sequelize.INTEGER,
    field: 'Ask for Date',
    allowNull: false
  },
  Seek_Authorization: {
    type:Sequelize.INTEGER,
    field: 'Seek Authorization',
    allowNull: false
  },
  Print_Separate_Invoice: {
    type:Sequelize.INTEGER,
    field: 'Print Separate Invoice',
    allowNull: false
  },
  Front_Of_Check: {
    type:Sequelize.INTEGER,
    field: 'Front of Check',
    allowNull: false
  },
  Keyboard_Entry_Required: {
    type:Sequelize.INTEGER,
    field: 'Keyboard Entry Required',
    allowNull: false
  },
  Pay_Account_Bill: {
    type:Sequelize.INTEGER,
    field: 'Pay Account Bill',
    allowNull: false
  },
  Marking_Only: {
    type:Sequelize.INTEGER,
    field: 'Marking Only',
    allowNull: false
  },
  Foreign_Currency: {
    type:Sequelize.INTEGER,
    field: 'Foreign Currency',
    allowNull: false
  },
  Endorsement_Line_1: {
    type:Sequelize.STRING(40),
    field: 'Endorsement Line 1',
    allowNull: false
  },
  Endorsement_Line_2: {
    type:Sequelize.STRING(40),
    field: 'Endorsement Line 2',
    allowNull: false
  },
  Check_Payee: {
    type:Sequelize.STRING(40),
    field: 'Check Payee',
    allowNull: false
  },
  Slip_Back_In_Printer: {
    type:Sequelize.STRING(20),
    field: 'Slip Back in Printer',
    allowNull: false
  },
  Ask_For_Card_Account: {
    type:Sequelize.STRING(20),
    field: 'Ask for Card_Account',
    allowNull: false
  },
  Invoice_In_Printer: {
    type:Sequelize.STRING(20),
    field: 'Invoice in Printer',
    allowNull: false
  },
  Slip_Front_In_Printer: {
    type:Sequelize.STRING(20),
    field: 'Slip Front in Printer',
    allowNull: false
  },
  Change_Line_On_Receipt: {
    type:Sequelize.STRING(20),
    field: 'Change Line on Receipt',
    allowNull: false
  },
  POS_Count_Entries: {
    type:Sequelize.INTEGER,
    field: 'POS Count Entries',
    allowNull: false
  },
  Taken_To_Bank: {
    type:Sequelize.INTEGER,
    field: 'Taken to Bank',
    allowNull: false
  },
  Counting_Required: {
    type:Sequelize.INTEGER,
    field: 'Counting Required',
    allowNull: false
  },
  Multiply_In_Tender_Operations: {
    type:Sequelize.INTEGER,
    field: 'Multiply in Tender Operations',
    allowNull: false
  },
  Account_Types: {
    type:Sequelize.INTEGER,
    field: 'Account Type',
    allowNull: false
  },
  Account_No: {
    type:Sequelize.STRING(20),
    field: 'Account No_',
    allowNull: false
  },
  Account_Name: {
    type:Sequelize.STRING(50),
    field: 'Account Name',
    allowNull: false
  },
  Difference_G_L_Acc: {
    type:Sequelize.STRING(20),
    field: 'Difference G_L Acc_',
    allowNull: false
  },
  Last_Date_Modified: {
    type:Sequelize.DATEONLY,
    field: 'Last Date Modified',
    allowNull: false
  },
  Primary_Key: {
    type:Sequelize.STRING(21),
    field: 'Primary Key',
    allowNull: false
  },
  Compress_Paym_Entries: {
    type:Sequelize.INTEGER,
    field: 'Compress Paym_ Entries',
    allowNull: false
  },
  Print_In_CID_Report: {
    type:Sequelize.INTEGER,
    field: 'Print in CID Report',
    allowNull: false
  },
  POS_Pickup_Warning_Amount: {
    type:Sequelize.DECIMAL,
    field: 'POS Pickup Warning Amount',
    allowNull: false
  },
  Bank_Account_Type: {
    type:Sequelize.INTEGER,
    field: 'Bank Account Type',
    allowNull: false
  },
  Bank_Account_No: {
    type:Sequelize.STRING(20),
    field: 'Bank Account No_',
    allowNull: false
  },
  Bank_Account_Name: {
    type:Sequelize.STRING(50),
    field: 'Bank Account Name',
    allowNull: false
  },
  Bank_Diff_G_L_Acc: {
    type:Sequelize.STRING(20),
    field: 'Bank Diff_ G_L Acc_',
    allowNull: false
  },
  Taken_To_Safe: {
    type:Sequelize.INTEGER,
    field: 'Taken to Safe',
    allowNull: false
  },
  POS_Pickup_Warning_Text: {
    type:Sequelize.STRING(30),
    field: 'POS Pickup Warning Text',
    allowNull: false
  },
  Count_By_Denominations: {
    type:Sequelize.INTEGER,
    field: 'Count by Denominations',
    allowNull: false
  },
  Remove_Float_Type: {
    type:Sequelize.STRING(10),
    field: 'Remove_Float Type',
    allowNull: false
  },
  Max_Cash_Drop_Amount: {
    type:Sequelize.DECIMAL,
    field: 'Max Cash Drop Amount',
    allowNull: false
  },
  Auto_Account_Payment_Tender: {
    type:Sequelize.INTEGER,
    field: 'Auto Account Payment Tender',
    allowNull: false
  },
  E_coin_Tender: {
    type:Sequelize.INTEGER,
    field: 'E-coin Tender',
    allowNull: false
  },
  Loyalty_Tender: {
    type:Sequelize.INTEGER,
    field: 'Loyalty Tender',
    allowNull: false
  },
  Cash_Tender: {
    type:Sequelize.INTEGER,
    field: 'Cash Tender',
    allowNull: false
  },
  Cash_Back_Tender_Type_Code: {
    type:Sequelize.STRING(20),
    field: 'Cash Back Tender Type Code',
    allowNull: false
  },
  Exclude_Coins_To_Bank: {
    type:Sequelize.INTEGER,
    field: 'Exclude Coins to Bank',
    allowNull: false
  },
  To_Bank_By_Denom: {
    type:Sequelize.INTEGER,
    field: 'To Bank by Denom_',
    allowNull: false
  },
  Fixed_Float_By_Denom: {
    type:Sequelize.INTEGER,
    field: 'Fixed Float by Denom_',
    allowNull: false
  },
  Use_Bags_For_Bank: {
    type:Sequelize.INTEGER,
    field: 'Use Bags for Bank',
    allowNull: false
  },
  Bank_Bags_Nos: {
    type:Sequelize.STRING(20),
    field: 'Bank Bags Nos_',
    allowNull: false
  },
  Use_Bags_For_Safe: {
    type:Sequelize.INTEGER,
    field: 'Use Bags for Safe',
    allowNull: false
  },
  Safe_Bags_No_Type: {
    type:Sequelize.INTEGER,
    field: 'Safe Bags No_ Type',
    allowNull: false
  },
  Safe_Bags_Nos: {
    type:Sequelize.STRING(20),
    field: 'Safe Bags Nos_',
    allowNull: false
  },
  Fixed_Float: {
    type:Sequelize.INTEGER,
    field: 'Fixed Float',
    allowNull: false
  },
  Use_Bags_For_Fixed_Float: {
    type:Sequelize.INTEGER,
    field: 'Use Bags for Fixed Float',
    allowNull: false
  },
  Fixed_Float_Bags_Nos: {
    type:Sequelize.STRING(20),
    field: 'Fixed Float Bags_ Nos_',
    allowNull: false
  },
  Fiscal_ID: {
    type:Sequelize.STRING(30),
    field: 'Fiscal ID',
    allowNull: false
  },
  Fixed_Float_Bags_No_Type: {
    type:Sequelize.INTEGER,
    field: 'Fixed Float Bags No_ Type',
    allowNull: false
  },
  Safe_Tender: {
    type:Sequelize.INTEGER,
    field: 'Safe Tender',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Tender Type',
  timestamps: false,
  freezeTableName: true,
});

module.exports = tenderTypeModel;
