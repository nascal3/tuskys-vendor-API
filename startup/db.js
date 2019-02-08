const config = require('config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.get('database'),
    config.get('user'),
    config.get('password'),
    {
      dialect: 'mssql',
      host: '192.168.150.163',
      dialectOptions: {
        encrypt: true
      },
      operatorsAliases: false
    }
);

module.exports = sequelize;
