const Sequelize = require('sequelize');
const sequelize = require('../startup/db');

const suppUsersModel = sequelize.define('Supplier_Users', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Vendor_No: {
    type:Sequelize.STRING(50),
    field: 'Vendor No',
    allowNull: false
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
    allowNull: true
  },
  Password: {
    type:Sequelize.TEXT,
    allowNull: false
  },
  Level: {
    type:Sequelize.INTEGER,
    allowNull: false
  },
  User_ID: {
    type: Sequelize.INTEGER,
    field: 'User ID',
    primaryKey: true,
    allowNull: false
  },
  StartDate: Sequelize.DATEONLY,
  EndDate: Sequelize.DATEONLY,
}, {
  schema: 'dbo',
  tableName: 'Supplier_Users',
  timestamps: false,
  freezeTableName: true,
});

module.exports = suppUsersModel;
