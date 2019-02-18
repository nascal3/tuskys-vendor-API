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
  Ship_To_Name: {
    type: Sequelize.STRING(50),
    field: 'Ship-to Name',
    allowNull: false
  },
  Posting_Date: {
    type: Sequelize.DATE,
    field: 'Posting Date',
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
  Document_Date: {
    type: Sequelize.DATE,
    field: 'Document Date',
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
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Return Shipment Header',
  timestamps: false,
  freezeTableName: true,
});

module.exports = returnShipmentHeaderModel;
