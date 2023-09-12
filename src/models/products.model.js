const { DataTypes } = require("sequelize");

const db = require("../database/database");

const Productos = db.define("products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  img: { type: DataTypes.STRING },

  nameItem: { type: DataTypes.STRING, allowNull: false, unique: true },

  price: { type: DataTypes.FLOAT, allowNull: false },

  description: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Productos;
