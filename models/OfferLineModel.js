const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const offerLineModel = sequelize.define('Offer_Line', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Offer_No: {
    type:Sequelize.STRING(20),
    field: 'Offer No_',
    primaryKey: true,
    allowNull: false
  },
  Line_No_: {
    type:Sequelize.INTEGER,
    field: 'Line No_',
    primaryKey: true,
    allowNull: false
  },
  xStatus: {
    type: Sequelize.INTEGER,
    field: 'xStatus',
    allowNull: false
  },
  Type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  No: {
    type: Sequelize.STRING(20),
    field: 'No_',
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Standard_Price_Including_VAT: {
    type: Sequelize.DECIMAL,
    field: 'Standard Price Including VAT',
    allowNull: false
  },
  Standard_Price: {
    type: Sequelize.DECIMAL,
    field: 'Standard Price',
    allowNull: false
  },
  Disc_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Disc_ %',
    allowNull: false
  },
  Discount_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Discount Amount',
    allowNull: false
  },
  Offer_Price: {
    type: Sequelize.DECIMAL,
    field: 'Offer Price',
    allowNull: false
  },
  Offer_Price_Including_VAT: {
    type: Sequelize.DECIMAL,
    field: 'Offer Price Including VAT',
    allowNull: false
  },
  Discount_Amount_Including_VAT: {
    type: Sequelize.DECIMAL,
    field: 'Discount Amount Including VAT',
    allowNull: false
  },
  Primary_Key: {
    type: Sequelize.STRING(35),
    field: 'Primary Key',
    allowNull: false
  },
  Disable_Periodic_Discount: {
    type: Sequelize.INTEGER,
    field: 'Disable Periodic Discount',
    allowNull: false
  },
  Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Currency Code',
    allowNull: false
  },
  Unit_Of_Measure: {
    type: Sequelize.STRING,
    field: 'Unit of Measure',
    allowNull: false
  },
  Variant_Code: {
    type: Sequelize.STRING(10),
    field: 'Variant Code',
    allowNull: false
  },
  Quantity: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Display_Prompt: {
    type: Sequelize.STRING(30),
    field: 'Display Prompt',
    allowNull: false
  },
  Min_Selection: {
    type: Sequelize.INTEGER,
    field: 'Min_ Selection',
    allowNull: false
  },
  Max_Selection: {
    type: Sequelize.INTEGER,
    field: 'Max_ Selection',
    allowNull: false
  },
  Selected_Deal_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Selected Deal Line No_',
    allowNull: false
  },
  Multiple_Selection: {
    type: Sequelize.INTEGER,
    field: 'Multiple Selection',
    allowNull: false
  },
  Selected_Modifier_Line_No: {
    type: Sequelize.INTEGER,
    field: 'Selected Modifier Line No_',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Offer Line',
  timestamps: false,
  freezeTableName: true,
});

module.exports = offerLineModel;
