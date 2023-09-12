const { DataTypes } = require("sequelize");

const db = require("../database/database");

const Eventos = db.define("events", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  nameEvent: { type: DataTypes.STRING, allowNull: false, unique: true },

  dateInit: { type: DataTypes.DATEONLY, allowNull: false },

  dateFinish: { type: DataTypes.DATEONLY, allowNull: false },

  descriptionEvent: { type: DataTypes.STRING, allowNull: false },

  imgEvent: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Eventos;
