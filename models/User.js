const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Game",
        key: "id"
      }
    }    
  },

  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;