const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'securesup_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || 'root_password',
  {
    host: process.env.DB_HOST || 'db',
    dialect: 'mysql'
  }
);

module.exports = sequelize;