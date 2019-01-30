const Sequelize = require('sequelize');
const sequelize = require('../startup/db');

const suppUsers = sequelize.define('Supplier_Users', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  Vendor_No: {
    type:Sequelize.STRING(50),
    field: 'Vendor No',
  },
  Fullname: Sequelize.STRING(50),
  Email: Sequelize.STRING(50),
  Phone: Sequelize.STRING(50),
  Username: Sequelize.STRING(50),
  Password: Sequelize.STRING(50),
  Level: Sequelize.INTEGER,
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

module.exports = suppUsers;
