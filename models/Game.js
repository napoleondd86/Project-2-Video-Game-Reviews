const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    }

  },

  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Game'
  }
);

module.exports = Game;