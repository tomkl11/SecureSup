const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Application = sequelize.define('Application', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    references: { model: 'Users', key: 'id' }
  },
  schoolId: {
    type: DataTypes.INTEGER,
    references: { model: 'Schools', key: 'id' }
  },
  rank: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Application;