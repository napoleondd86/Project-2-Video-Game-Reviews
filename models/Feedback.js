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
  review: {
    // text or string?
    type: DataTypes.TEXT
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
  }
},
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'feedback'
  },
);

module.exports = Feedback;