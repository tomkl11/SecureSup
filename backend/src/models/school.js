const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const School = sequelize.define('School', {
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING },
  totalPlaces: { type: DataTypes.INTEGER, defaultValue: 0 },
  availablePlaces: { type: DataTypes.INTEGER, defaultValue: 0 }
});

module.exports = School;