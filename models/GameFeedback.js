const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GameFeedback extends Model {}

GameFeedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Game",
        key: "id"
      }
    },
    feedback_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Feedback",
        key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "game_feedback", // THIS IS WHAT WILL BE DISPLAYED IN MYSQL
  }
);

module.exports = GameFeedback;
