const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING, unique: true },
});

module.exports = Token;
