const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const offerModel = sequelize.define('Offer', {
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
  Type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Status: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Price_Group: {
    type: Sequelize.STRING(10),
    field: 'Price Group',
    allowNull: false
  },
  Disc_Perc_From_Std_Price: {
    type: Sequelize.DECIMAL,
    field: 'Disc_ % From Std_ Price',
    allowNull: false
  },
  Rounding_Method: {
    type: Sequelize.STRING(10),
    field: 'Rounding Method',
    allowNull: false
  },
  Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Currency Code',
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  },
  No_Series: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  Disc_Validation_Period_ID: {
    type: Sequelize.INTEGER,
    field: 'Disc_ Validation Period ID',
    allowNull: false
  },
  Disable_Periodic_Discount: {
    type: Sequelize.INTEGER,
    field: 'Disable Periodic Discount',
    allowNull: false
  },
  Deal_Price: {
    type: Sequelize.DECIMAL,
    field: 'Deal Price',
    allowNull: false
  },
  Show_Deal_Lines: {
    type: Sequelize.INTEGER,
    field: 'Show Deal Lines',
    allowNull: false
  },
  Menu_Profile_ID_Filter: {
    type: Sequelize.STRING(10),
    field: 'Menu Profile ID Filter',
    allowNull: false
  },
  Price_Group_Validation: {
    type: Sequelize.INTEGER,
    field: 'Price Group Validation',
    allowNull: false
  },
  Sales_Type_Filter: {
    type: Sequelize.STRING,
    field: 'Sales Type Filter',
    allowNull: false
  },
  Deal_Modifiers_On_Request_Only: {
    type: Sequelize.INTEGER,
    field: 'Deal Modifiers on Request Only',
    allowNull: false
  },
  Explanatory_Header_Text: {
    type: Sequelize.STRING(30),
    field: 'Explanatory Header Text',
    allowNull: false
  },
  Customer_Disc_Group: {
    type: Sequelize.STRING(10),
    field: 'Customer Disc_ Group',
    allowNull: false
  },
  Loyalty_Scheme_Code: {
    type: Sequelize.STRING(10),
    field: 'Loyalty Scheme Code',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Offer',
  timestamps: false,
  freezeTableName: true,
});

module.exports = offerModel;
