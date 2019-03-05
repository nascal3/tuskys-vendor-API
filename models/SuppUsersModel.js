const Sequelize = require('sequelize');
const sequelize = require('../startup/db');

const suppUsersModel = sequelize.define('Supplier_Users', {
  User_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Vendor_No: {
    type:Sequelize.STRING(50),
    field: 'Vendor No',
    allowNull: true
  },
  Fullname: {
    type:Sequelize.STRING(50),
    allowNull: false
  },
  Email: {
    type:Sequelize.STRING(50),
    allowNull: false
  },
  Phone: Sequelize.STRING(50),
  Username: {
    type:Sequelize.STRING(50),
    allowNull: false
  },
  Password: {
    type:Sequelize.TEXT,
    allowNull: false
  },
  Level: {
    type:Sequelize.INTEGER,
    allowNull: false
  },
  StartDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  EndDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  schema: 'dbo',
  tableName: 'Supplier_Users',
  timestamps: false,
  freezeTableName: true,
});

module.exports = suppUsersModel;
