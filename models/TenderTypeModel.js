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
  Print_In_CID_Report: {
    type:Sequelize.INTEGER,
    field: 'Print in CID Report',
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
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Tender Type',
  timestamps: false,
  freezeTableName: true,
});

module.exports = tenderTypeModel;
