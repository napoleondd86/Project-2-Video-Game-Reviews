const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feedback extends Model { }

Feedback.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  played: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  review: {
    // text or string?
    type: DataTypes.STRING
  },
  game_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Game',
      key: 'id'
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    },
  },
  hours: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  age: {
    type: DataTypes.STRING,
    allowNull: true
  },
},
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'Feedback'
  },
);

module.exports = Feedback;